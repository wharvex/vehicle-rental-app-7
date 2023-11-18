import type { NextPage } from "next";
import Layout from "../../components/my-layout";
import SelectCars from "@/components/browse-select-cars";

const Page: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1664px] overflow-hidden flex flex-col items-center justify-start">
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        mainChild1={
          <SelectCars selectCarsBackground="#ebf5ff" />
        }
      />
    </div>
  );
};

export default Page;
