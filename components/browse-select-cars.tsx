"use client";
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
    car_type: prisma.CarType;
    image_path: string;
  }

  const [availableCars, setAvailableCars] = useState<Car[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car>();
  // const [carSelection, setCarSelection] = useState<string>("");

  const openModal = (car: Car) => {
    if (car) {
      setSelectedCar(car);
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
      <div
        // className="flex flex-row items-center justify-center pt-0 px-[100px] pb-[70px] box-border text-center text-36xl text-black font-body-large self-stretch flex-1"
        style={selectCarsStyle}
      >
        {/* <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-heading">
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <ul className="flex flex-col items-center justify-start gap-[10px] list-none"> */}
        <div>
          <div>
            <ul>
              <li>Step 1: Choose lots</li>
              <li>Step 2: Enter dates</li>
              <li className="font-semibold">Step 3: View vehicles</li>
            </ul>
          </div>
          <div className="self-stretch p-7 flex flex-col items-center justify-start gap-[35px]">
            <div className="self-stretch flex flex-col items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
                Results
              </h1>
              <div className="flex gap-[75px]">
                {availableCars.map((car) => (
                  <div key={car.id} className="flex flex-col gap-[8px]">
                    <img
                      src={car.image_path}
                      className="h-[200px] w-[200px]"
                    ></img>
                    <div className="text-center">
                      {car.year} {car.make.name} {car.model.name}
                    </div>
                    <div className="text-center font-semibold">
                      ${car.car_type.price.toString()} per day
                    </div>
                    {/* <Link href={{pathname: "../test-db-cars", 
                      query: {pickupLot: pickupLot, returnLot: returnLot, 
                              pickupDate: pickupDate, returnDate: returnDate, carSelection: car.id} }}
                      className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                    > */}
                    <button onClick={() => openModal(car)}>
                      <div className="box-border w-[94px] h-[42px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                        <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                          Select
                        </div>
                      </div>
                      {/* </Link> */}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={{ pathname: "../browse_choose_lots" }}
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
            >
              <div className="box-border p-4 flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  New browse
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
            >
              <div className="box-border w-[314px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  Back to Home
                </div>
              </div>
            </Link>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            onClick={closeModal}
          >
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 gap-20">
                  {/* Car details go here */}
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {selectedCar!.year} {selectedCar!.make.name}{" "}
                    {selectedCar!.model.name}
                  </h3>
                  <Link
                    href={{
                      pathname: "../test-db-cars",
                      query: {
                        pickupLot: pickupLot,
                        returnLot: returnLot,
                        pickupDate: pickupDate,
                        returnDate: returnDate,
                        carSelection: selectedCar!.id,
                      },
                    }}
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                  >
                    <h3>Proceed</h3>
                  </Link>
                  {/* ... other details */}
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 p-2"
                >
                  <span className="text-gray-400 hover:text-gray-500">
                    &times;
                  </span>
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
