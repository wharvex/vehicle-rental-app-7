import type { NextPage } from "next";
import DetailRowCarCard from "./detail-row-car-card";
import ImageCarCard from "./image-car-card";

type CarCardType = {
  image1?: string;
  makeValueText: string;
  modelValueText: string;
  colorValueText: string;
  yearValueText: string;
  typeValueText: string;
  priceValueText: string;
};

const CarCard: NextPage<CarCardType> = ({
  image1 = "/image-11@2x.png",
  makeValueText,
  modelValueText,
  colorValueText,
  yearValueText,
  typeValueText,
  priceValueText,
}) => {
  return (
    <div className="flex flex-col items-start justify-start p-2.5 border-solid border-black border-2 bg-orange-200">
      <DetailRowCarCard
        labelText1="Make:"
        valueText1={makeValueText}
        labelText2="Model:"
        valueText2={modelValueText}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <DetailRowCarCard
        labelText1="Color:"
        valueText1={colorValueText}
        labelText2="Year:"
        valueText2={yearValueText}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <DetailRowCarCard
        labelText1="Type:"
        valueText1={typeValueText}
        labelText2="Price:"
        valueText2={priceValueText}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <ImageCarCard image1={image1} />
    </div>
  );
};

export default CarCard;
