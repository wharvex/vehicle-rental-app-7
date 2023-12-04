"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect, useMemo, type CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import CalendarPicker from "./calendar-picker";

type ChooseDatesTitle = {
  text?: string;
  chooseDatesBackground?: CSSProperties["background"];
};

const ChooseDates: NextPage<ChooseDatesTitle> = ({
  text = "Choose Pick-up and Return Lots",
  chooseDatesBackground,
}) => {
  const chooseDatesStyle: CSSProperties = useMemo(() => {
    return {
      background: chooseDatesBackground,
    };
  }, [chooseDatesBackground]);

  const params = useSearchParams();

  interface Closure {
    id: string;
    date: Date;
  }

  const [ pickupDate, setPickupDate ] = useState(new Date());
  const [ returnDate, setReturnDate ] = useState(new Date());
  const [ pickupLotClosures, setPickupLotClosures ] = useState<Date[]>([]);
  const [ returnLotClosures, setReturnLotClosures ] = useState<Date[]>([]);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const tomorrowString = tomorrow.toLocaleDateString();

  useEffect(() => {
    setReturnDate(tomorrow);
  }, []);

  const validateDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // ignore user's current time
    if (!pickupDate || !returnDate || pickupDate == today || returnDate <= pickupDate) {
      return false;
    }
    else {
      return true;
    }
  };

  const areDatesValid = validateDates();
  
  if (params) {
    const pickupLot = params.get("pickupLot");
    const returnLot = params.get("returnLot");

    useEffect(() => {
      fetch(`/api/closures?lotId=${pickupLot}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Closure[]) => {
          const closureDates = data.map((closure) => new Date(closure.date));
          setPickupLotClosures(closureDates);
        })
        .catch((error) => {
          console.error("Error fetching pickup lot closures:", error);
        });
    }, [pickupLot]);

    useEffect(() => {
      fetch(`/api/closures?lotId=${returnLot}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Closure[]) => {
          const closureDates = data.map((closure) => new Date(closure.date));
          setReturnLotClosures(closureDates);
        })
        .catch((error) => {
          console.error("Error fetching return lot closures:", error);
        });
    }, [returnLot]);

    return (
      <div style={chooseDatesStyle} className="bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <ul className="flex space-x-7 mb-8">
            <li className="text-gray-500">Step 1: Choose lots</li>
            <li className="font-bold text-blue-700">Step 2: Enter dates</li>
            <li className="text-gray-500">Step 3: View vehicles</li>
          </ul>

          <h1 className="text-2xl font-semibold mb-6 italic">  
            Choose Pick-up and Return dates
          </h1>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">Pickup Date:*</label>
              <CalendarPicker
                selectedDate={pickupDate}
                onChange={setPickupDate}
                closureDates={pickupLotClosures}
                minimumDate={new Date()}
              />
            </div>
            <div>
              <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">Return Date:*</label>
              <CalendarPicker
                selectedDate={returnDate}
                onChange={setReturnDate}
                closureDates={returnLotClosures}
                minimumDate={tomorrow}
              />
            </div>
            {areDatesValid ? (
              <Link href={{pathname: "../browse_select_cars", 
                    query: {pickupLot: pickupLot, returnLot: returnLot,
                            pickupDate: pickupDate.toLocaleDateString(), returnDate: returnDate.toLocaleDateString()} }}
                className="bg-blue-700 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center no-underline"
              >
                <span className="text-lg">Continue</span>
              </Link>
            ) : (
              <div>
                <p className="text-red-500 text-xs">*Please enter valid dates, with the return date after the pick-up date.</p>
                <div 
                  className="bg-blue-300 text-white font-medium py-2 px-4 rounded flex items-center justify-center no-underline cursor-not-allowed"
                >
                  <span className="text-lg">Continue</span>
                </div>
              </div>
            )}
            <Link href="/"
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center no-underline mt-4"
            >
              <span className="text-lg">Back to Home</span>
            </Link>
          </div>
          <div className="mt-10">
            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">Pick-up Lot Closures</p>
              {pickupLotClosures.length > 0 ? (
                <ul className="list-disc list-inside">
                  {pickupLotClosures.map((closure, idx) => (
                    <li key={idx}>Closed on: {closure.toLocaleDateString()}</li>
                  ))}
                </ul>
              ) : (
                <p>No closures for the selected pickup lot.</p>
              )}
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">Return Lot Closures</p>
              {returnLotClosures.length > 0 ? (
                <ul className="list-disc list-inside">
                  {returnLotClosures.map((closure, idx) => (
                    <li key={idx}>Closed on: {closure.toLocaleDateString()}</li>
                  ))}
                </ul>
              ) : (
                <p>No closures for the selected return lot.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    throw new Error("Error! No lots selected.");
  }
};

export default ChooseDates;
