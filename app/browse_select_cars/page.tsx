import type { NextPage } from "next";
import Layout from "../../components/my-layout";
import SelectCars from "@/components/browse-select-cars";

const Page: NextPage = () => {
  return (
    <div 
      className="bg-aliceblue w-[1440px] h-[1748px] flex flex-col items-center justify-start"
      style={{ flexShrink: 0 }}
    >
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        mainChild1={
          <SelectCars 
            // mainContentCarCardsAlignSelf="stretch"
            // mainContentCarCardsFlex="1" />
            selectCarsBackground="#ebf5ff"
          />
        }
      />
    </div>
  );
};

export default Page;
