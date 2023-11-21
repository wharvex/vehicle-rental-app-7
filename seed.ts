import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const customerData: Prisma.CustomerCreateInput[] = [
  {
    name: "Bob",
    email: "bob@bob.bob",
  },
  {
    name: "Sue",
    email: "sue@sue.sue",
  },
];

// const reservationData: Prisma.ReservationCreateInput[] = [
//   {
//     pickup_date: new Date(2023, 13, 1),
//     return_date: new Date(2023, 13, 3),
//   },
// ];

async function main() {
  console.log(`Start seeding ...`);
  for (const c of customerData) {
    const customer = await prisma.customer.create({
      data: c,
    });
    console.log(`Created customer with id: ${customer.id}`);
  }
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
