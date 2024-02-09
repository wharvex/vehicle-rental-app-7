/**
 * To avoid exhausting the database connections by creating multiple Prisma Client instances,
 * use this Prisma Singleton pattern, as described here:
 * 
 * https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
 */
import { PrismaClient as PrismaClient1 } from "@prisma-db-1/client";
import { PrismaClient as PrismaClient2 } from "@prisma-db-2/client";

let PrismaClient: typeof PrismaClient1 | typeof PrismaClient2;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    PrismaClient = PrismaClient2;
} else {
    // production code
    PrismaClient = PrismaClient1;
}
const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
