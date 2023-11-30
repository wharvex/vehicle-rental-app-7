'use client'
import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect, useMemo, type CSSProperties } from "react";
import { useSearchParams } from 'next/navigation';
import CalendarPicker from './calendar-picker';

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
  
  if (params) {
    const pickupLot = params.get('pickupLot');
    const returnLot = params.get('returnLot');
    
    useEffect(() => {
      fetch(`/api/closures?lotId=${pickupLot}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Closure[]) => {
          const closureDates = data.map(closure => new Date(closure.date));
          setPickupLotClosures(closureDates); 
        })
        .catch(error => {
          console.error('Error fetching pickup lot closures:', error);
        });
    }, [pickupLot]);
  
    useEffect(() => {
      fetch(`/api/closures?lotId=${returnLot}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Closure[]) => {
          const closureDates = data.map(closure => new Date(closure.date));
          setReturnLotClosures(closureDates); 
        })
        .catch(error => {
          console.error('Error fetching return lot closures:', error);
        });
    }, [returnLot]);

    return (
      <div 
        // className="flex flex-row items-center justify-center pt-0 px-[100px] pb-[70px] box-border text-center text-36xl text-black font-body-large self-stretch flex-1"
        style={chooseDatesStyle}
      >
        {/* <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-heading">
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <ul className="flex flex-col items-center justify-start gap-[10px] list-none"> */}
        <div>
            <ul>
              <li>Step 1: Choose lots</li>
              <li className="font-semibold">Step 2: Enter dates</li>
              <li>Step 3: View vehicles</li>
            </ul>
          </div>
        <div className="flex flex-col">
          <div>
            <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
                Choose Pick-up and Return dates
              </h1>
            </div>
            <div>
              <label>Pickup Date:</label>
              <CalendarPicker
                selectedDate={pickupDate}
                onChange={setPickupDate}
                closureDates={pickupLotClosures}
              />
            </div>
            <div>
              <label>Return Date:</label>
              <CalendarPicker
                selectedDate={returnDate}
                onChange={setReturnDate}
                closureDates={returnLotClosures}
              />
            </div>
            <Link href={{pathname: "../browse_select_cars", 
                  query: {pickupLot: pickupLot, returnLot: returnLot,
                          pickupDate: pickupDate.toLocaleDateString(), returnDate: returnDate.toLocaleDateString()} }}
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
            >
              <div className="box-border flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch p-4 flex-1 relative  tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  Continue
                </div>
              </div>
            </Link>
            <Link href="/"
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
            >
              <div className="box-border flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch p-4 flex-1 relative tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  Back to Home
                </div>
              </div>
            </Link>
          <div>
          </div>
            <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <div><p className="font-semibold">Pick-up Lot Closures</p>
              {pickupLotClosures.length > 0 ? (
                <ul>
                  {pickupLotClosures.map((closure) => (
                    <li>
                      Closed on: {closure.toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No closures for the selected pickup lot.</p>
              )}
            </div>
            {/* <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl"> */}
            <div>
              <p className="font-semibold">Return Lot Closures</p>
              {returnLotClosures.length > 0 ? (
                <ul>
                  {returnLotClosures.map((closure) => (
                    <li>
                      Closed on: {closure.toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No closures for the selected return lot.</p>
              )}
            </div>
          </div>
        </div>
          {/* <div className="self-stretch flex flex-col items-center justify-start gap-[75px] text-24xl"> */}
            
          {/* <div className="self-stretch flex flex-col items-start justify-start gap-[10px]"> */}
            {/* <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Pickup date*:
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
              <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                <div className=" box-border w-[350px] h-[58px] flex flex-row items-center justify-start py-[5px] px-[25px] border-[1px] border-solid border-black ">
                  <input
                    className="[border:none] font-medium font-hfb-extra-small text-11xl bg-[transparent] relative tracking-[0.5px] leading-[100%] text-grey text-left flex items-center w-[300px] shrink-0"
                    type="date" min="2023-11-03" max="2025-12-30" required
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Return date*:
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
              <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                <div className=" box-border w-[350px] h-[58px] flex flex-row items-center justify-start py-[5px] px-[25px] border-[1px] border-solid border-black ">
                  <input
                    className="[border:none] font-medium font-hfb-extra-small text-11xl bg-[transparent] relative tracking-[0.5px] leading-[100%] text-grey text-left flex items-center w-[300px] shrink-0"
                    type="date" min="2023-11-03" max="2025-12-30" required
                  />
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
  else {
    throw new Error('Error! No lots selected.');
  }
};

export default ChooseDates;