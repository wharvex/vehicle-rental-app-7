import type { NextPage } from "next";
import Layout from "../components/my-layout";
import MainContentGeneric from "@/components/main-content-generic";
import MainContentHero from "@/components/main-content-hero";
import MainContentCardsGroup from "@/components/main-content-cards-group";

const Page: NextPage = () => {
  const onImageHeaderPageLogoClick = () => {};

  return (
    <div className="relative bg-white w-full h-[1664px] overflow-hidden flex flex-col items-center justify-start">
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        mainChild1={
          <MainContentHero
            mainContentHeroFlexShrink="0"
            bodyHeroBoxSizing="border-box"
            bodyHeroBoxSizing1="border-box"
            bodyHeroBoxSizing2="border-box"
            bodyHeroBoxSizing3="border-box"
          />
        }
        mainChild2={<MainContentCardsGroup />}
        mainChild3={
          <MainContentGeneric mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #92c9f9)" />
        }
      />
    </div>
  );
};

export default Page;
