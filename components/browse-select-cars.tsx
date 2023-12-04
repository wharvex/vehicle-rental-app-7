'use client';
import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect, useMemo, type CSSProperties } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import prisma from "@prisma/client";

type SelectCarsTitle = {
  text?: string;
  selectCarsBackground?: CSSProperties["background"];
};

const SelectCars: NextPage<SelectCarsTitle> = ({
  text = "Results",
  selectCarsBackground,
}) => {
  const selectCarsStyle: CSSProperties = useMemo(() => {
    return {
      background: selectCarsBackground,
    };
  }, [selectCarsBackground]);

  const params = useSearchParams();

  interface Car {
    id: string;
    year: number;
    make: prisma.Make;
    model: prisma.Model;
    color: string;
    details: string;
    mileage: number;
    car_type: prisma.CarType;
    car_features: prisma.CarFeaturesOnCars[];
    image_path: string;
  }

  interface CarFeature {
    id: string;
    name: string;
    price: number;
  }

  const [availableCars, setAvailableCars] = useState<Car[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car>();
  const [currentFeatures, setCurrentFeatures] = useState<CarFeature[]>();

  const openModal = (car: Car) => {
    if (car) {
      setSelectedCar(car);
      let features = car.car_features.map((feature) => feature.car_feature_id);
      fetch(`/api/features?features=${features}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCurrentFeatures(data);
        })
        .catch((error) => {
          console.error("Error fetching features:", error);
        });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (params) {
    const pickupLot = params.get("pickupLot");
    const returnLot = params.get("returnLot");
    const pickupDate = params.get("pickupDate");
    const returnDate = params.get("returnDate");

    useEffect(() => {
      fetch(
        `/api/matchingCars?pickupLot=${pickupLot}&returnLot=${returnLot}&pickupDate=${pickupDate}&returnDate=${returnDate}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setAvailableCars(data);
        })
        .catch((error) => {
          console.error("Error fetching cars:", error);
        });
    }, [pickupLot, returnLot, pickupDate, returnDate]);

    return (
      <div style={selectCarsStyle} className="bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            <ul className="flex space-x-7 mb-4 mr-2">
              <li className="text-gray-500">Step 1: Choose lots</li>
              <li className="text-gray-500">Step 2: Enter dates</li>
              <li className="font-bold text-blue-700">Step 3: View vehicles</li>
            </ul>
            <div className="flex flex-col space-y-2 mt-2">
              <Link
                href={{ pathname: "../browse_choose_lots" }}
                className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded transition duration-300 ease-in-out flex items-center no-underline"
              >
                New browse
              </Link>
              <Link
                href="/"
                className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center no-underline mt-4"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <h1 className="text-2xl font-semibold mb-6 italic text-center mt-0">
            Results
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCars.map((car) => (
              <div
                key={car.id}
                className="flex flex-col items-center p-4 border border-gray-300 rounded-lg"
              >
                <img
                  src={car.image_path}
                  className="h-48 w-full object-cover mb-3"
                ></img>
                <div className="text-lg font-gray-700">
                  {car.year} {car.make.name} {car.model.name}
                </div>
                <div className="text-md font-semibold text-black">
                  ${car.car_type.price.toString()} per day
                </div>
                <button
                  onClick={() => openModal(car)}
                  className="cursor-pointer mt-3 bg-blue-700 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out"
                >
                  <span className="text-lg">Select</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            onClick={closeModal}
          >
            <div className="relative top-20 mx-auto p-5 border w-97 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <div className="mx-auto gap-[20px] flex items-center justify-center rounded-full bg-orange-100">
                  <img
                    src={selectedCar!.image_path}
                    className="h-[400px]"
                  ></img>
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {selectedCar!.year} {selectedCar!.make.name}{" "}
                      {selectedCar!.model.name}, {selectedCar!.color}
                    </h3>
                    <p>{selectedCar!.details}</p>
                    <p>{selectedCar!.mileage} miles</p>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Base price per day: $
                      {selectedCar!.car_type.price.toString()}
                    </h3>
                    <Link
                      href={{
                        pathname: "/confirm-reservation",
                        query: { pickupLot: pickupLot, returnLot: returnLot },
                      }}
                      className="bg-blue-700 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center no-underline"
                    >
                      <span className="text-lg">Proceed to Reservation</span>
                    </Link>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 p-2  hover:text-black hover:font-bold cursor-pointer"
                >
                  <span className="text-gray-600">X</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    throw new Error("Error! Invalid lots or dates.");
  }
};

export default SelectCars;
