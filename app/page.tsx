import type { NextPage } from "next";
import Layout from "../components/my-layout";
import MainContentGeneric from "@/components/main-content-generic";
import MainContentHero from "@/components/main-content-hero";
import MainContentCardsGroup from "@/components/main-content-cards-group";

const Page: NextPage = () => {
  const onImageHeaderPageLogoClick = () => {};

  return (
    <>
      <MainContentHero
        mainContentHeroFlexShrink="0"
        bodyHeroBoxSizing="border-box"
        bodyHeroBoxSizing1="border-box"
        bodyHeroBoxSizing2="border-box"
        bodyHeroBoxSizing3="border-box"
      />
      <MainContentCardsGroup />
      <MainContentGeneric
        text="We Look Forward To Working With You!"
        mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #92c9f9)"
      />
    </>
  );
};

export default Page;
