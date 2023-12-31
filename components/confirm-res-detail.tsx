import LabelDetail from "./confirm-res-label-detail";
import ValueDetail from "./confirm-res-value-detail";

export default function ConfirmResDetail() {
  return (
    <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
      <LabelDetail detailLabelText="Label" />
      <ValueDetail detailValueText="Value" />
    </div>
  );
}
