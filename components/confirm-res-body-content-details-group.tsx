import ConfirmResDetail from "./confirm-res-detail";
import ButtonSmallSmall from "./confirm-res-button-small-small";

type BodyContentDetailsGroupType = {
  showThirdDetail: boolean;
};

export default function BodyContentDetailsGroup(
  fn: BodyContentDetailsGroupType
) {
  return (
    <div className="flex flex-row items-center justify-between flex-1">
      <ConfirmResDetail />
      <ConfirmResDetail />
      {fn.showThirdDetail && <ConfirmResDetail />}
      <ButtonSmallSmall buttonText="Text" />
    </div>
  );
}
