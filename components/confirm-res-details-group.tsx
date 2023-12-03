import type { NextPage } from "next";
import DetailsGroupHeader from "./confirm-res-header-details-group";
import BodyDetailsGroup from "./confirm-res-body-details-group";

type DetailsGroupProps = {
  imageSrc: string;
  headerText: string;
  showThirdDetail: boolean;
};

export default function DetailsGroup(fn: DetailsGroupProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-[10px] self-stretch">
      <DetailsGroupHeader headerText={fn.headerText} />
      <BodyDetailsGroup
        imageSrc={fn.imageSrc}
        showThirdDetail={fn.showThirdDetail}
      />
    </div>
  );
}
