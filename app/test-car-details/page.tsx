import Layout from "../../components/my-layout";
import MainContentCarCards from "@/components/main-content-car-cards";
import { getPairwiseCars } from "../_actions";

export default async function Page() {
  const pairwiseCars = await getPairwiseCars();
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
            pairwiseCars={pairwiseCars}
            mainContentCarCardsAlignSelf="stretch"
            mainContentCarCardsFlex="1"
          />
        }
      />
    </div>
  );
}
