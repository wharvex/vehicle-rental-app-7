import DetailsGroupContainerHeader from "./confirm-res-header-details-group-group";
import DetailsGroup from "./confirm-res-details-group";

type MainContentDetailsGroupContainerProps = {
  pickupLot: string;
  returnLot: string;
  pickupDate: string;
  returnDate: string;
  selectedCar: string;
};

export default function MainContentDetailsGroupContainer(
  fn: MainContentDetailsGroupContainerProps
) {
  return (
    <div className="w-[1440px] flex flex-col items-center justify-start py-0 px-[100px] box-border gap-[75px]">
      <DetailsGroupContainerHeader text="Reservation Details" />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="From Lot"
        showThirdDetail={true}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="To Lot"
        showThirdDetail={true}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Dates"
        showThirdDetail={false}
      />
      <DetailsGroup
        imageSrc="/image2@2x.png"
        headerText="Vehicle"
        showThirdDetail={false}
      />
    </div>
  );
}
