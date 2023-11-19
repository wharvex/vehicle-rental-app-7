import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const customer = await prisma.customer.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });

  console.log(customer);
  // ... you will write your Prisma Client queries here
  // const usersWithPosts = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // })
  // console.dir(usersWithPosts, { depth: null })
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
