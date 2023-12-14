import DetailsGroupContainerHeader from "./confirm-res-header-details-group-group";
import DetailsGroup from "./confirm-res-details-group";
import { ConfirmResSearchParamsType } from "@/models/confirm-res-search-params";

export default function MainContentDetailsGroupContainer(
  fn: ConfirmResSearchParamsType
) {
  return (
    <div className="w-[1440px] flex flex-col items-center justify-start py-0 px-[100px] box-border gap-[75px]">
      <DetailsGroupContainerHeader text="Reservation Details" />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="From Lot"
        showThirdDetail={true}
        data={fn.pickupLot}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="To Lot"
        showThirdDetail={true}
        data={fn.returnLot}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Dates"
        showThirdDetail={false}
        data={[fn.pickupDate, fn.returnDate]}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Vehicle"
        showThirdDetail={true}
        data={fn.selectedCar}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Vehicle Features"
        showThirdDetail={true}
        data={fn.selectedCar}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Total Price"
        showThirdDetail={true}
        data={fn.selectedCar}
      />
    </div>
  );
}
