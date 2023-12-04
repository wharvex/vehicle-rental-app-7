// 'use client'
import type { NextPage } from "next";
import Link from "next/link";
import React, { useState, useMemo, type CSSProperties, useEffect } from "react";
import { useRouter } from "next/navigation";

type ChooseLotsTitle = {
  text?: string;
  chooseLotsBackground?: CSSProperties["background"];
};

const ChooseLots: NextPage<ChooseLotsTitle> = ({
  text = "Choose Pick-up and Return Lots",
  chooseLotsBackground,
}) => {
  const chooseLotsStyle: CSSProperties = useMemo(() => {
    return {
      background: chooseLotsBackground,
    };
  }, [chooseLotsBackground]);

  interface Lot {
    id: string;
    name: string;
  }
  
  const router = useRouter();
  const [lots, setLots] = useState<Lot[]>([]);
  const [pickupLot, setPickupLot] = useState<string>('');
  const [returnLot, setReturnLot] = useState<string>('');

  useEffect(() => {
    fetch('/api/lots')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => { setLots(data); })
      .catch(error => {
        console.error('Error fetching lots:', error);
      });
  }, []);

  const handlePickupLotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPickupLot(event.target.value);
  };
  
  const handleReturnLotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReturnLot(event.target.value);
  };
  
  return (
    <div style={chooseLotsStyle} className="bg-white p-8">
      <div className="max-w-4xl mx-auto">
          <ul className="flex space-x-7 mb-8">
            <li className="font-bold text-blue-700">Step 1: Choose lots</li>
            <li className="text-gray-500">Step 2: Enter dates</li>
            <li className="text-gray-500">Step 3: View vehicles</li>
          </ul>

          <h1 className="text-2xl font-semibold mb-6 italic">
              Choose car lots
          </h1>
          
          <div className="space-y-6">  
            <div>
              <label htmlFor="pickup-lot" className="block text-sm font-medium text-gray-700 mb-2">Pickup lot*:</label>
              <select
                name="pickup-lot"
                id="pickup-lot"
                value={pickupLot}
                onChange={handlePickupLotChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a lot</option>
                {lots.map((lot) => (
                  <option key={lot.id} value={lot.id}>{lot.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="return-lot" className="block text-sm font-medium text-gray-700 mb-2">Return lot*:</label>
              <select
                name="return-lot"
                id="return-lot"
                value={returnLot}
                onChange={handleReturnLotChange}
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a lot</option>
                {lots.map((lot) => (
                  <option key={lot.id} value={lot.id}>{lot.name}</option>
                ))}
              </select>
            </div>
            <Link href={{pathname: "../browse_choose_dates", 
              query: {pickupLot: pickupLot, returnLot: returnLot} }}
              className="bg-blue-700 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center no-underline"
            >
              <span className="text-lg">Continue</span>
            </Link>
            <Link href="/"
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center no-underline mt-4"
            >
                <span className="text-lg">Back to Home</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseLots;