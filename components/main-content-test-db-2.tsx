import type { NextPage } from "next";
import prisma from "@/lib/prisma";

export default async function MainContentTestDB2() {
  const feed = await prisma.customer.findMany({});
  return (
    <div className="bg-aliceblue w-[1440px] overflow-hidden flex flex-row items-center justify-center p-[50px] box-border gap-[50px]">
      <ul>
        {feed.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
