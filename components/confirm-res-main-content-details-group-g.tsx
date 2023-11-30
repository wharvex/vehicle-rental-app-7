import type { NextPage } from "next";
import HeaderDetailsGroupGroup from "./confirm-res-header-details-group-group";
import DetailsGroup from "./confirm-res-details-group";

const MainContentDetailsGroupG: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-col items-center justify-start py-0 px-[100px] box-border gap-[75px]">
      <HeaderDetailsGroupGroup text="Something Details" />
      <DetailsGroup image="/image2@2x.png" />
      <DetailsGroup image="/image2@2x.png" />
      <DetailsGroup image="/image2@2x.png" />
    </div>
  );
};

export default MainContentDetailsGroupG;
