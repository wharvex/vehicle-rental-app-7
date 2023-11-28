import React, { useState, FormEvent, useEffect } from 'react';
import './PaymentFeature.css'; // Import the CSS file
import { loadStripe, Stripe } from '@stripe/stripe-js'; // import stripe 
import './RentalTermsAndPolicy.css'; // Import the CSS file for styling

import DateTime from 'react-datetime'; // import react-dataTime to use/ implement calendar
import 'react-datetime/css/react-datetime.css';
import moment, { Moment } from 'moment'; // get current time. 


//npm install react-datepicker --save   (Install this before running program)
 
// Function to load Stripe - got from online source. 
const useStripeLoader = () => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>(
    loadStripe('pk_test_51OGt81HuJCXKY98q20cFX9AKglHu34X9RdBhH15zcLZO8r9dTMwyCHIrtMUbmROeVXRbuKnnzH28iJdaUx6pjJ8B00y7ShtZDN')); // API token that I got from stripe website >> went to developer section. 

  return stripePromise;
};

/**
 * Interface for car, store name and price per day. 
 */
interface Car {
  name: string;
  pricePerDay: number;
}

/**
 * For main functionality payment feature 
 * @returns 
 */
const PaymentFeature: React.FC = () => {  
  const stripePromise = useStripeLoader(); // for stripe 

  const [firstName, setFirstName] = useState('');  // first name and last name 
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');   // email section 
  const [phoneNumber, setPhoneNumber] = useState('');  // phone number 
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // store seelcted car 
  const [numberOfDays, setNumberOfDays] = useState(1);  // number of rental day 

  const [startDate, setStartDate] = useState<Date | null>(new Date());  // starting day for renting a car 
  const [endDate, setEndDate] = useState<Date | null>(null);  // return/end date 
  const [reservationConfirmed, setReservationConfirmed] = useState(false);  // reservation confrim function

  // State for uploaded files such as driving license and insruace. 
  const [drivingLicense, setDrivingLicense] = useState<File | null>(null);
  const [insurance, setInsurance] = useState<File | null>(null);
  const [totalCost, setTotalCost] = useState<number>(0); // Initialize total cost state
 
  const [drivingLicenseUploaded, setDrivingLicenseUploaded] = useState(false);
  const [insuranceUploaded, setInsuranceUploaded] = useState(false);

  const [agreed, setAgreed] = useState(false);  // for "I agree " button. 

  const handleAgree = () => {
    
   console.log('User agreed to terms!');  // display this msg if user clicked I agree button 
   
};

/**
 * LIst of available car name and price per day. 
 */
  const availableCars: Car[] = [
    { name: 'Ford Escape 2018', pricePerDay: 50 },
    { name: 'Ford Escape 2019', pricePerDay: 60 },
    { name: 'Hunday 2020', pricePerDay:70 },
    { name: 'KIA 2023', pricePerDay: 60 },
    { name: 'Honda 2020', pricePerDay: 64 },
    { name: 'Ford Escape Black 2020', pricePerDay: 65 },
    { name: 'Ford Escape White 2023', pricePerDay: 79 },
    { name: 'Ford Escape Truck 2020', pricePerDay: 62 },
    { name: 'KIA 2022', pricePerDay: 69 },
    { name: 'KIA 2019', pricePerDay: 72 },
    { name: 'Audi 2020', pricePerDay: 73 },
    { name: 'Audi White 2022', pricePerDay: 80 },
    { name: 'KIA Blue 2017', pricePerDay:67},
    { name: 'Hunday Black SUV 2023', pricePerDay:78},
    { name: 'Audi Black 2023', pricePerDay: 77},
    { name: 'Ford Escape SUV Black 2022', pricePerDay: 69 },
    { name: 'Marza Black SUV 2022', pricePerDay: 59},
    // Add more cars here
  ];
/**
 * Citation: https://uploadcare.com/blog/how-to-upload-file-in-react/
 * @param event 
 * @param fileSetter 
 * @param successSetter 
 */
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>, // catch HTML imput element is whether changed or not. 
    fileSetter: React.Dispatch<React.SetStateAction<File | null>>, // update state such as  whether file is updated. 
    successSetter: React.Dispatch<React.SetStateAction<boolean>>  // boolean : indidcate wehther file is uploaded. 
  ) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;  // get file from event. 
    fileSetter(file);
    if (file) {
      // Simulating upload success with a timeout
      setTimeout(() => {
        successSetter(true);
        // only display success message for 3 seconds. after that message will disappear. 
        setTimeout(() => {
          successSetter(false);
        }, 3000);
      }, 2000);
    }
  };



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // if event is selected ex) IF user selected car. 
    if (selectedCar) {   // get selected car's per day cost and calculate total cost. 
      const deposit: number = 100;
      const taxesAndFees: number = 20;
      const totalCost: number =
        selectedCar.pricePerDay * numberOfDays + deposit + taxesAndFees;

     // console.log('Total Cost:', totalCost);
      setTotalCost(totalCost); // Update/set total cost. -> use this later with "Finish reservation" button 
    }
  };

/**
 * Parse event to integer to access availableCars array. 
 * @param event 
 */
  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {  // check reaact event 

    const selectedCarIndex = parseInt(event.target.value, 10);  // parse the value selected through evnet into integer type ( numerical) 
    setSelectedCar(availableCars[selectedCarIndex]); // use calculated index (selectedCarIndex) to access avaiableCars array. 
  };

  
  const handleStripePayment = async () => {
    try {
      const stripe = await stripePromise;  // retrieve strpe using await stripePromise. 
      if (!stripe) { // handle error. 
        console.error('Stripe could not be loadede/opened');
        return;
      }
      // case stripe was successfullly loaded. 
      const { error: checkoutError } = await stripe.redirectToCheckout({  // direct to checkout. 
        lineItems: [
          { price: 'price_123', quantity: numberOfDays }, // Replace 'price_123' with your actual price ID
        ],
        mode: 'payment',
        successUrl: window.location.origin + '/success', // Redirect URL after successful payment
        cancelUrl: window.location.origin + '/cancel', // Redirect URL after canceling payment
      });

      if (checkoutError) {
        console.error('Error during redirect to checkout:', checkoutError); // handle error. 
        // Handle error display or logging
      }
    } catch (err) {
      console.error('Error initiating Stripe payment:', err);  // handle error on login/ displaying. 
      
    }
  };

  /**
   * Function generates random reservation code. 
   * @param length 
   * @returns 
   */
  const generateRandomCode = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const reservationCode = generateRandomCode(7);

  // prints out reservation message. 
  const handleFinishReservation = () => {
    console.log('Handling finish reservation...');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Number of Days:', numberOfDays);
    console.log('Generated Reservation Code:', reservationCode);
  
    if (firstName && lastName && numberOfDays) {
      const reservationDetails = `
        Renter: ${firstName} ${lastName}\n
        Duration: ${new Date().toISOString().split('T')[0]} to ${calculateEndDate()}\n
        Reservation Code: XYZ123\n
      `;
    
    setReservationConfirmed(true); // set as true 
  } else {
    console.error('Incomplete information for reservation');  // handle error 
  }
};
  // get end date. I implemented function handleENdDateChange so this is not really needed. 
  const calculateEndDate = () => {
    const startDate = new Date();  // get starting day
    const endDate = new Date(); //
    endDate.setDate(startDate.getDate() + numberOfDays);  // get number of day want to rent  and make endDate 
    return endDate.toISOString().split('T')[0];
  };
  const resultEndDate = calculateEndDate();
  console.log(resultEndDate); // prints out end date 

  // get starting date 
  const handleStartDateChange = (date: Date | Moment | string | null) => {
    if (date instanceof Date || moment.isMoment(date) || date === null) {  // defualt set as current time and date 
      setStartDate(date as Date | null);
    }
  };

  // get ending date 
  const handleEndDateChange = (date: Date | Moment | string | null) => {
    if (date instanceof Date || moment.isMoment(date) || date === null) {  // set defualt end date as current moment. 
      setEndDate(date as Date | null);
    }
  };

  // HTML 
  <div className="payment-feature">
    
    <div>
      {/* Create stripe payment button*/  }
      <button onClick={handleStripePayment}>Pay with Stripe</button>
    </div>
  
    <div>&nbsp;</div> {/* create space */ } 
  
    <div>
      <button onClick={handleFinishReservation}>Finish Reservation</button>
    </div>
  </div>
  
  
  const generateReservationMemo = () => {
    // Logic to generate reservation memo here
    const reservationMemo = `Your reservation is confirmed for ${selectedCar?.name} for ${numberOfDays} days. Reservation number is XYZ123`;
    return reservationMemo;
  };

 
  return (
    <div className="payment-feature">
      <h2>Rental Car Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-container">
            <label>Enter First Name:</label>
            <input
              type="text"
              placeholder="First Name"   
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Add space */}
        <div>&nbsp;</div>


          <div className="input-container">
            <label>Enter Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Add space */}
        <div>&nbsp;</div>

          <div className="input-container">
            <label>Enter Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        
        <div className="form-row">
          {/* Add space */}
        <div>&nbsp;</div>


          <div className="input-container">
            <label>Enter Phone Number:</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              /**
               * onChange triggers when event/ value changes so if there is some event in phone number placeholder 
               * we call setPhoneNumber() function. 
               * Citation : https://sinn.hashnode.dev/formik-simply-handling-imagesfiles-upload
               */
            />
          </div>
          {/* Add space */}
        <div>&nbsp;</div>

          <div className="input-container">
            <label>Choose a Car:</label>
            <select onChange={handleCarChange}>
              <option value="">Select a car</option>
              {availableCars.map((car, index) => (
                <option key={index} value={index}>
                  {car.name}
                </option>
              ))}
            </select>
            {selectedCar && (
              <img
                src={process.env.PUBLIC_URL + '/vehicle-image.jpg'}
                alt="Selected Vehicle"
              />
            )}
          </div>
        </div>

        <div className="form-row">
        <div>&nbsp;</div>

          <div className="input-container">
            <label>Number of Days:</label>
            <input
              type="number"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(parseInt(e.target.value))}
            />
          </div>

          <div className="form-row">
        <div className="input-container">
          <label>Choose Preferred Reservation Date:</label>
          </div>
        </div>
          <div>&nbsp;</div>

        <div>
          <DateTime
          value={startDate ? startDate : undefined} // set start Date if it exist. used Lamba function if yes then startDate, if not undefined. 
          onChange={handleStartDateChange}
          inputProps={{ placeholder: 'Start Date' }}
        />
        <DateTime
          value={endDate ? endDate : undefined}  // set endDate if it exist. if not set it as jundefiend 
          onChange={handleEndDateChange}
          inputProps={{ placeholder: 'End Date' }}
        />
    </div>

          {/* Display security deposit, tax, and total cost */}
        <div>
          <label>Security Deposit: $100</label>
        </div>
        <div>&nbsp;</div>

        <div>
          <label>Tax: ${20}</label>
        </div>
        <div>&nbsp;</div>

        <div>
          <label>Total: {totalCost}</label>
        </div>

        <div>&nbsp;</div>

          <label>Upload Driving License:</label>
          <div className="form-row">
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"  // type of file that can be accpeted. 
          onChange={(e) => handleFileUpload(e, setDrivingLicense, setDrivingLicenseUploaded)} // if user uploaded something -> triggers onChange -> call handleFileUpload() function. 
        />
        {drivingLicenseUploaded && <p className="success-message">Successfully uploaded Driving License!</p>}  {/* if user uploaded somting, display success message */ }
      </div>
        </div>
        
        {/* Input field for insurance */}
        <div>
        <div>&nbsp;</div>

          <label>Upload Insurance:</label>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf" // type of file that is acceptable. 
          onChange={(e) => handleFileUpload(e, setInsurance, setInsuranceUploaded)} 
        />
        {insuranceUploaded && <p className="success-message">Successfully uploaded Insurance!</p>}
     
       {/* display policy here */}
        <RentalTermsAndPolicy onAgree={handleAgree} />  {/* There is other cons for REntalTermAndPolicy at the bottom */}

    <div>&nbsp;</div>
    <div className="form-row">
         
          <button className="payment-button" onClick={handleStripePayment}>
            Pay with Stripe
          </button>

          <div>&nbsp;</div>

        {/* Display reservation confirmation message if reservationConfirmed is true */}
      {reservationConfirmed && (
        <div>
          <h3>Reservation Confirmed!</h3>
          <p>Your reservation has been successfully confirmed. Thank you!</p>
        </div>
      )}
      {/* Button to finish reservation */}
      <div>
              <button className="payment-button" onClick={handleFinishReservation}>Finish Reservation</button>
      </div>  
            
        </div>
        </div>
        </div>
      </form>
      </div>
     
  );
};

// export default PaymentFeature;

////// Rental Term and Policy  ////// 
interface RentalTermsAndPolicyProps {
  onAgree: () => void; // Define the type for onAgree
}

const RentalTermsAndPolicy: React.FC<RentalTermsAndPolicyProps> = ({ onAgree }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    if (typeof onAgree === 'function') {
      onAgree(); // if user clicked "I agree " button, thene call the callback function 
    }
  };

  return (
    <div className="terms-and-policy">
      <h3>Rental Car Usage Terms and Policy</h3>
      <p>
        Please read and agree to the terms and policies before proceeding with the reservation.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ex ac mi posuere,
        sed varius enim eleifend.
      </p>
      <p>
      IMPORTANT: You are responsible to us if the vehicle is returned late, lost or damaged, as well
      as for traffic fines and other charges that arise during the rental.
      </p>
      <p>
      Please read the Rental Agreement carefully to understand your obligations in full.
      </p>

      <p>
      IMPORTANT: We typically reserve an amount on your credit or debit card (or take a deposit) at
      least equal to the estimated charges shown on your Rental Agreement. This will be released (or
      repaid) on return following payment of the rental charges. However, please be aware that it
      may take up to 30 days for any unused preauthorisation or deposit to be released.
      </p>  

      <p>
      Condition: We will provide a summary of any pre-existing damage on our Vehicle Condition Report
      (VCR) at the start of your rental. It is important that you check the condition of the vehicle and
      compare its actual condition with the VCR before leaving. Any differences must be reported to the
      location staff so that the VCR can be updated before you leave the location premises. Please click here
      to understand how we will process damage caused during your rental. 
      </p>

      <p>
      ACCIDENTS
      If you have an accident you agree to co-operate with us and our insurers in any investigation or
      subsequent legal proceedings.
      You must also take the following steps:
      1. Always:
      a. Inform the rental location immediately.
      b. Complete a European Accident Statement (you will find these or a similar document
      in the glove compartment of the vehicle) and immediately send a copy to the rental
      location (the email address is on the Rental Agreement); and
      c. Check the Country Specific Terms for any additional requirements and variations that
      apply in that location.
      2. Also, if anyone is injured:
      a. Report the accident to the local police;
      b. Do not admit fault;
      c. Take a note of the names and addresses of everyone involved, including witnesses.
      3. Also, if the vehicle is not driveable contact Emergency Roadside Assistance (click here for
      contact details).
      </p>
      <div className="agree-button-container">
        <button
          onClick={handleAgree}
          className={`agree-button ${agreed ? 'hidden' : ''}`}
        >
          I Agree
        </button>
      </div>
      {agreed && (
        <p>Thank you for agreeing to the terms!</p>
        
      )}
    </div>
  );
};

export { PaymentFeature, RentalTermsAndPolicy };