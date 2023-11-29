"use server";

import { getCar, getCars, carType, carsType } from "@/models/car-type";
import { Prisma } from "@prisma/client";

/** Adapted this reduce from: https://stackoverflow.com/a/44996257
 * It splits models into an array of two-item arrays so they can be mapped over 2-by-2.
 * If models has an odd number of elements, the last array in pairwiseModels will only
 * have one element.
 * */
export async function getPairwiseCars() {
  const cars = await getCars();

  return cars.reduce<carsType[]>((result, _, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
}

export type PairwiseCars = Prisma.PromiseReturnType<typeof getPairwiseCars>;
