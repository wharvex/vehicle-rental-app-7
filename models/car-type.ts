import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

/**
 * Need to "include" entries from other tables.
 * Need to wrap this find call in a function to get its return type, based on method found here:
 * https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types#solution-1
 * */
export async function getCar() {
  const car = await prisma.car.findFirst({
    include: {
      make: true,
      model: true,
      car_type: true,
      car_features: true,
    },
  });
  return car;
}

export async function getCars() {
  const cars = await prisma.car.findMany({
    include: {
      make: true,
      model: true,
      car_type: true,
      car_features: true,
    },
  });
  return cars;
}

export async function getCarFeatureWithID(featureID: string) {
  const carFeature = await prisma.carFeature.findUniqueOrThrow({
    where: {
      id: featureID,
    },
  });
  return carFeature;
}
export async function getCarFeaturesWithIDs(featureIDs: string[] | undefined) {
  const carFeatures = await prisma.carFeature.findMany({
    where: {
      id: {
        in: featureIDs,
      },
    },
  });
  return carFeatures;
}

export type carType = Prisma.PromiseReturnType<typeof getCar>;
export type carsType = Prisma.PromiseReturnType<typeof getCars>;
