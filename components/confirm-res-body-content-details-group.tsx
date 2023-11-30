import type { NextPage } from "next";
import Detail from "./confirm-res-detail";
import ButtonSmallSmall from "./confirm-res-button-small-small";

type BodyContentDetailsGroupType = {
  showThirdDetail?: boolean;
};

const BodyContentDetailsGroup: NextPage<BodyContentDetailsGroupType> = ({
  showThirdDetail = true,
}) => {
  return (
    <div className="flex flex-row items-center justify-between flex-1">
      <Detail />
      <Detail />
      <Detail />
      <ButtonSmallSmall buttonText="Text" />
    </div>
  );
};

export default BodyContentDetailsGroup;
