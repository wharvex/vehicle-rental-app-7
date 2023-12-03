import type { NextPage } from "next";
import ContainerDetailsGroupImag from "./confirm-res-container-details-group-imag";
import BodyContentDetailsGroup from "./confirm-res-body-content-details-group";

type BodyDetailsGroupType = {
  imageSrc: string;
  showThirdDetail: boolean;
};

export default function BodyDetailsGroup(fn: BodyDetailsGroupType) {
  return (
    <div className="flex flex-row items-center justify-start gap-[10px] self-stretch">
      <ContainerDetailsGroupImag image={fn.imageSrc} />
      <BodyContentDetailsGroup showThirdDetail={fn.showThirdDetail} />
    </div>
  );
}
