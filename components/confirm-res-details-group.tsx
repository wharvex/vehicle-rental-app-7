import type { NextPage } from "next";
import HeaderDetailsGroup from "./confirm-res-header-details-group";
import BodyDetailsGroup from "./confirm-res-body-details-group";

type DetailsGroupType = {
  image?: string;
};

const DetailsGroup: NextPage<DetailsGroupType> = ({ image }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[10px] self-stretch">
      <HeaderDetailsGroup headerText="Something Choice" />
      <BodyDetailsGroup image="/image6@2x.png" />
    </div>
  );
};

export default DetailsGroup;
