import type { NextPage } from "next";
import ContainerDetailsGroupImag from "./confirm-res-container-details-group-imag";
import BodyContentDetailsGroup from "./confirm-res-body-content-details-group";

type BodyDetailsGroupType = {
  image?: string;
};

const BodyDetailsGroup: NextPage<BodyDetailsGroupType> = ({ image }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[10px] self-stretch">
      <ContainerDetailsGroupImag image="/image2@2x.png" />
      <BodyContentDetailsGroup showThirdDetail />
    </div>
  );
};

export default BodyDetailsGroup;
