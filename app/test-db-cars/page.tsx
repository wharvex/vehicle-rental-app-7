import type { NextPage } from "next";
import Layout from "../../components/my-layout";
import MainContentCarCards from "@/components/main-content-car-cards";

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
          <MainContentCarCards
            image1="/image-1@2x.png"
            image11="/image-1@2x.png"
            mainContentCarCardsAlignSelf="stretch"
            mainContentCarCardsFlex="1"
          />
        }
      />
    </div>
  );
};

export default Page;
