import { PrismaClient, Prisma } from "@prisma/client";
import { faker, fakerEN_US } from "@faker-js/faker";
import __ from "lodash";
import { ImagesResults } from "@/models/images";
import fetchImages from "@/lib/fetchImages";

const prisma = new PrismaClient();

async function seedWithFaker() {
  const customerDatas = Array.from({ length: 100 }, () => {
    const name = faker.person.firstName();
    return {
      name: name,
      email: faker.internet.email({ firstName: name }),
      id: faker.string.uuid(),
    } satisfies Prisma.CustomerCreateInput;
  });

  const makeDatas = Array.from({ length: 7 }, () => {
    return {
      name: faker.vehicle.manufacturer(),
      id: faker.string.uuid(),
    } satisfies Prisma.MakeCreateInput;
  });

  const modelDatas = Array.from({ length: 21 }, () => {
    return {
      name: faker.vehicle.model(),
      make: {
        connect: {
          id: (__.sample(makeDatas) as Prisma.MakeCreateInput).id,
        },
      },
      id: faker.string.uuid(),
    } satisfies Prisma.ModelCreateInput;
  });

  const managerDatas = Array.from({ length: 30 }, () => {
    const name = faker.person.firstName();
    return {
      name: name,
      email: faker.internet.email({ firstName: name }),
      id: faker.string.uuid(),
    } satisfies Prisma.ManagerCreateInput;
  });

  const lotDatas = Array.from({ length: 25 }, () => {
    const state = fakerEN_US.location.state({ abbreviated: true });
    return {
      address: {
        create: {
          street_address: faker.location.streetAddress(),
          city: faker.location.city(),
          zip_code: Number(fakerEN_US.location.zipCode({ state: state })),
          state: state,
        },
      },
      manager: {
        connect: {
          id: (__.sample(managerDatas) as Prisma.ManagerCreateInput).id, // Choose a random manager to connect to the lot
        },
      },
      id: faker.string.uuid(),
    } satisfies Prisma.LotCreateInput;
  });

  const carTypeDatas = Array.from({ length: 5 }, () => {
    return {
      name: faker.vehicle.type(),
      price: faker.commerce.price({ min: 100, max: 1000 }),
      id: faker.string.uuid(),
    } satisfies Prisma.CarTypeCreateInput;
  });

  // const carFeatureDatas = Array.from({ length: 90 }, () => {
  //   return {
  //     id: faker.string.uuid(),
  //     name: faker.word.adjective() + " " + faker.word.noun(),
  //     price: faker.commerce.price({ min: 50, max: 500 }),
  //   } satisfies Prisma.CarFeatureCreateInput;
  // });

  const imagesQueryUrl =
    "https://api.pexels.com/v1/search?query=car&per_page=30";
  const images: ImagesResults | undefined = await fetchImages(imagesQueryUrl);
  if (!images) {
    console.log("no images found");
    return;
  }
  const carDatas = Array.from({ length: 30 }, (_, idx) => {
    return {
      id: faker.string.uuid(),
      make: {
        connect: {
          id: (__.sample(makeDatas) as Prisma.MakeCreateInput).id,
        },
      },
      model: {
        connect: {
          id: (__.sample(modelDatas) as Prisma.ModelCreateInput).id,
        },
      },
      color: __.capitalize(faker.vehicle.color()),
      year: faker.number.int({ min: 2010, max: 2023 }),
      current_lot: {
        connect: {
          id: (__.sample(lotDatas) as Prisma.LotCreateInput).id,
        },
      },
      car_type: {
        connect: {
          id: (__.sample(carTypeDatas) as Prisma.CarTypeCreateInput).id,
        },
      },
      mileage: faker.number.int({ max: 100000 }),
      licensePlate:
        faker.string.alpha({ casing: "upper", length: 3 }) +
        faker.string.numeric({ length: 4 }),
      user_added: {
        connect: {
          id: (__.sample(managerDatas) as Prisma.ManagerCreateInput).id,
        },
      },
      image_path: images.photos[idx].src.large,
      car_features: {
        create: Array.from({ length: 3 }, () => {
          return {
            car_feature: {
              create: {
                name: faker.company.catchPhrase(),
                price: faker.commerce.price({ min: 50, max: 500 }),
              },
            },
          };
        }),
      },
    } satisfies Prisma.CarCreateInput;
  });

  await prisma.$transaction([
    ...Array.from(customerDatas, (data) =>
      prisma.customer.create({ data: data })
    ),
    ...Array.from(makeDatas, (data) => prisma.make.create({ data: data })),
    ...Array.from(modelDatas, (data) => prisma.model.create({ data: data })),
    ...Array.from(managerDatas, (data) =>
      prisma.manager.create({ data: data })
    ),
    ...Array.from(lotDatas, (data) => prisma.lot.create({ data: data })),
    ...Array.from(carTypeDatas, (data) =>
      prisma.carType.create({ data: data })
    ),

    // ...Array.from(carFeatureDatas, (data) =>
    //   prisma.carFeature.create({ data: data })
    // ),
    ...Array.from(carDatas, (data) => prisma.car.create({ data: data })),
  ]);
}

async function seedWithoutFaker() {
  // Creating 4 lot locations with one Manager each
  const albanyLot = await prisma.lot.create({
    data: {
      address: {
        create: {
          street_address: "1400 Washington Ave",
          city: "Albany",
          state: "NY",
          zip_code: 12222,
        },
      },
      manager: {
        create: {
          name: "Bob Jones",
          email: "bob@jones.com",
        },
      },
    },
  });
  const maristLot = await prisma.lot.create({
    data: {
      address: {
        create: {
          street_address: "3399 North Rd",
          city: "Poughkeepsie",
          state: "NY",
          zip_code: 12601,
        },
      },
      manager: {
        create: {
          name: "John Williams",
          email: "john@williams.com",
        },
      },
    },
  });
  const oneontaLot = await prisma.lot.create({
    data: {
      address: {
        create: {
          street_address: "108 Ravine Pkwy",
          city: "Oneonta",
          state: "NY",
          zip_code: 13820,
        },
      },
      manager: {
        create: {
          name: "Patty Sue",
          email: "patty@sue.com",
        },
      },
    },
  });
  const newpaltzLot = await prisma.lot.create({
    data: {
      address: {
        create: {
          street_address: "1 Hawk Dr",
          city: "New Paltz",
          state: "NY",
          zip_code: 12561,
        },
      },
      manager: {
        create: {
          name: "Sarah May",
          email: "sarah@may.com",
        },
      },
    },
  });
  // Creating 2 Makes
  const ford = await prisma.make.create({
    data: {
      name: "Ford",
    },
  });
  const honda = await prisma.make.create({
    data: {
      name: "Honda",
    },
  });
  // Creating 3 Models for each Make
  const explorer = await prisma.model.create({
    data: {
      name: "Explorer",
      make_id: ford.id,
    },
  });
  const focus = await prisma.model.create({
    data: {
      name: "Focus",
      make_id: ford.id,
    },
  });
  const mustang = await prisma.model.create({
    data: {
      name: "Mustang",
      make_id: ford.id,
    },
  });
  const civic = await prisma.model.create({
    data: {
      name: "Civic",
      make_id: honda.id,
    },
  });
  const accord = await prisma.model.create({
    data: {
      name: "Accord",
      make_id: honda.id,
    },
  });
  const coupe = await prisma.model.create({
    data: {
      name: "Coupe",
      make_id: honda.id,
    },
  });
  // Creating 4 Car Types
  const suv = await prisma.carType.create({
    data: {
      name: "SUV",
      price: 149.99,
    },
  });
  const sedan = await prisma.carType.create({
    data: {
      name: "Sedan",
      price: 109.99,
    },
  });
  const luxury = await prisma.carType.create({
    data: {
      name: "Luxury",
      price: 199.99,
    },
  });
  // Creating cars for the Albany lot
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: explorer.id,
      color: "Red",
      year: 2020,
      num_rentals: 0,
      current_lot_id: albanyLot.id,
      car_type_id: suv.id,
      mileage: 1000,
      licensePlate: "ABC1111",
      user_added_id: albanyLot.manager_id,
      image_path: "cars/red-explorer",
    },
  });
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: focus.id,
      color: "Red",
      year: 2020,
      num_rentals: 0,
      current_lot_id: albanyLot.id,
      car_type_id: sedan.id,
      mileage: 1000,
      licensePlate: "DEF1111",
      user_added_id: albanyLot.manager_id,
      image_path: "cars/red-focus",
    },
  });
  await prisma.car.create({
    data: {
      make_id: honda.id,
      model_id: coupe.id,
      color: "Red",
      year: 2020,
      num_rentals: 0,
      current_lot_id: albanyLot.id,
      car_type_id: luxury.id,
      mileage: 1000,
      licensePlate: "GHI1111",
      user_added_id: albanyLot.manager_id,
      image_path: "cars/red-coupe",
    },
  });
  // Creating cars for the Marist lot
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: explorer.id,
      color: "Blue",
      year: 2021,
      num_rentals: 0,
      current_lot_id: maristLot.id,
      car_type_id: suv.id,
      mileage: 2000,
      licensePlate: "ABC2222",
      user_added_id: maristLot.manager_id,
      image_path: "cars/blue-explorer",
    },
  });
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: focus.id,
      color: "Blue",
      year: 2021,
      num_rentals: 0,
      current_lot_id: maristLot.id,
      car_type_id: sedan.id,
      mileage: 2000,
      licensePlate: "DEF2222",
      user_added_id: maristLot.manager_id,
      image_path: "cars/blue-focus",
    },
  });
  await prisma.car.create({
    data: {
      make_id: honda.id,
      model_id: coupe.id,
      color: "Blue",
      year: 2021,
      num_rentals: 0,
      current_lot_id: maristLot.id,
      car_type_id: luxury.id,
      mileage: 2000,
      licensePlate: "GHI2222",
      user_added_id: maristLot.manager_id,
      image_path: "cars/blue-coupe",
    },
  });
  // Creating cars for the Oneonta lot
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: explorer.id,
      color: "Silver",
      year: 2022,
      num_rentals: 0,
      current_lot_id: oneontaLot.id,
      car_type_id: suv.id,
      mileage: 3000,
      licensePlate: "ABC3333",
      user_added_id: oneontaLot.manager_id,
      image_path: "cars/silver-explorer",
    },
  });
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: focus.id,
      color: "Silver",
      year: 2022,
      num_rentals: 0,
      current_lot_id: oneontaLot.id,
      car_type_id: sedan.id,
      mileage: 3000,
      licensePlate: "DEF3333",
      user_added_id: oneontaLot.manager_id,
      image_path: "cars/silver-focus",
    },
  });
  await prisma.car.create({
    data: {
      make_id: honda.id,
      model_id: coupe.id,
      color: "Silver",
      year: 2022,
      num_rentals: 0,
      current_lot_id: oneontaLot.id,
      car_type_id: luxury.id,
      mileage: 3000,
      licensePlate: "GHI3333",
      user_added_id: oneontaLot.manager_id,
      image_path: "cars/silver-coupe",
    },
  });
  // Creating cars for the New Paltz lot
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: explorer.id,
      color: "Black",
      year: 2023,
      num_rentals: 0,
      current_lot_id: newpaltzLot.id,
      car_type_id: suv.id,
      mileage: 4000,
      licensePlate: "ABC4444",
      user_added_id: newpaltzLot.manager_id,
      image_path: "cars/black-explorer",
    },
  });
  await prisma.car.create({
    data: {
      make_id: ford.id,
      model_id: focus.id,
      color: "Black",
      year: 2023,
      num_rentals: 0,
      current_lot_id: newpaltzLot.id,
      car_type_id: sedan.id,
      mileage: 4000,
      licensePlate: "DEF4444",
      user_added_id: newpaltzLot.manager_id,
      image_path: "cars/black-focus",
    },
  });
  await prisma.car.create({
    data: {
      make_id: honda.id,
      model_id: coupe.id,
      color: "Black",
      year: 2023,
      num_rentals: 0,
      current_lot_id: newpaltzLot.id,
      car_type_id: luxury.id,
      mileage: 4000,
      licensePlate: "GHI4444",
      user_added_id: newpaltzLot.manager_id,
      image_path: "cars/black-coupe",
    },
  });
}

async function main() {
  console.log(`Start seeding ...`);
  // await seedWithoutFaker();
  await seedWithFaker();
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
