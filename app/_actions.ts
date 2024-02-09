"use server";

import { getCars, carsType } from "@/models/car-type";
import { Prisma } from "@prisma/client";

export async function getPairwiseCars() {
  const cars = await getCars();

  /** Adapted this reduce from: https://stackoverflow.com/a/44996257
   * It splits models into an array of two-item arrays so they can be mapped over 2-by-2.
   * If models has an odd number of elements, the last array in pairwiseModels will only
   * have one element.
   * */
  return cars.reduce<carsType[]>(
    (result: any[], _: any, index: number, array: string | any[]) => {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []
  );
}

export type PairwiseCars = Prisma.PromiseReturnType<typeof getPairwiseCars>;
