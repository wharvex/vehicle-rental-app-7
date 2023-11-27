import type { NextPage } from "next";
import DetailRowCarCard from "./detail-row-car-card";
import ImageCarCard from "./image-car-card";
import { carType, getCarFeatureWithID } from "@/models/car-type";

type CarCardType = {
  car: carType;
};

export default async function CarCard(fn: CarCardType) {
  const carFeature1 = await getCarFeatureWithID(
    fn.car?.car_features[0].car_feature_id!
  );
  const carFeature2 = await getCarFeatureWithID(
    fn.car?.car_features[1].car_feature_id!
  );
  const carFeature3 = await getCarFeatureWithID(
    fn.car?.car_features[2].car_feature_id!
  );
  const carFeatures = [carFeature1, carFeature2, carFeature3];
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
        labelText2="Type Price:"
        valueText2={"$" + fn.car?.car_type.price!}
        detailRowCarCardAlignItems="center"
        detailRowCarCardJustifyContent="center"
        detailRowCarCardAlignSelf="stretch"
      />
      {carFeatures.map((feature) => {
        return (
          <DetailRowCarCard
            key={feature.id}
            labelText1="Feature:"
            valueText1={feature.name}
            labelText2="Feat. Price:"
            valueText2={"$" + feature.price}
            detailRowCarCardAlignItems="center"
            detailRowCarCardJustifyContent="center"
            detailRowCarCardAlignSelf="stretch"
          />
        );
      })}
      <ImageCarCard image1={fn.car?.image_path} />
    </div>
  );
}
