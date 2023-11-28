import type { NextPage } from "next";
import DetailRowCarCard from "./detail-row-car-card";
import ImageCarCard from "./image-car-card";
import {
  carType,
  getCarFeatureWithID,
  getCarFeaturesWithIDs,
} from "@/models/car-type";

type CarCardType = {
  car: carType;
};

export default async function CarCard(fn: CarCardType) {
  const carFeatures =
    fn.car?.car_features === undefined
      ? [null]
      : await getCarFeaturesWithIDs(
          Array.from(fn.car.car_features, (feature) => feature.car_feature_id)
        );
  return (
    <div className="flex flex-col items-center justify-center p-2.5 border-solid border-black border-2 bg-orange-200">
      <DetailRowCarCard
        labelText1="Make:"
        valueText1={fn.car?.make.name!}
        labelText2="Model:"
        valueText2={fn.car?.model.name!}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <DetailRowCarCard
        labelText1="Color:"
        valueText1={fn.car?.color!}
        labelText2="Year:"
        valueText2={fn.car?.year.toString()!}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <DetailRowCarCard
        labelText1="Type:"
        valueText1={fn.car?.car_type.name!}
        labelText2="Price:"
        valueText2={"$" + fn.car?.car_type.price!}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      <ImageCarCard image1={fn.car?.image_path} />
      {carFeatures.map((feature) => {
        return (
          <>
            {feature && (
              <DetailRowCarCard
                key={feature.id}
                labelText1="Feature:"
                valueText1={feature.name}
                labelText2="Price:"
                valueText2={"$" + feature.price}
                detailRowCarCardAlignItems="center"
                detailRowCarCardJustifyContent="center"
                detailRowCarCardAlignSelf="stretch"
              />
            )}
          </>
        );
      })}
    </div>
  );
}
