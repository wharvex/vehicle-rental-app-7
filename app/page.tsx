import MainContentGeneric from "@/components/main-content-generic";
import MainContentHero from "@/components/main-content-hero";
import MainContentCardsGroup from "@/components/main-content-cards-group";

export default function Page() {
  return (
    <>
      <MainContentHero />
      <MainContentCardsGroup />
      <MainContentGeneric
        text="We Look Forward To Working With You!"
        mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #92c9f9)"
      />
    </>
  );
}
