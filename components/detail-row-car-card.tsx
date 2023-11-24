import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import DetailCarCard from "./detail-car-card";

type DetailRowCarCardType = {
  /** Style props */
  detailRowCarCardAlignItems?: CSSProperties["alignItems"];
  detailRowCarCardJustifyContent?: CSSProperties["justifyContent"];
  detailRowCarCardAlignSelf?: CSSProperties["alignSelf"];

  /** Content props */
  labelText1: string;
  labelText2: string;
  valueText1: string;
  valueText2: string;
};

const DetailRowCarCard: NextPage<DetailRowCarCardType> = ({
  detailRowCarCardAlignItems,
  detailRowCarCardJustifyContent,
  detailRowCarCardAlignSelf,
  labelText1,
  labelText2,
  valueText1,
  valueText2,
}) => {
  const detailRowCarCardStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: detailRowCarCardAlignItems,
      justifyContent: detailRowCarCardJustifyContent,
      alignSelf: detailRowCarCardAlignSelf,
    };
  }, [
    detailRowCarCardAlignItems,
    detailRowCarCardJustifyContent,
    detailRowCarCardAlignSelf,
  ]);

  return (
    <div
      className="flex flex-row items-center justify-center p-1 gap-[10px]"
      style={detailRowCarCardStyle}
    >
      <DetailCarCard labelText={labelText1} valueText={valueText1}/>
      <DetailCarCard labelText={labelText2} valueText={valueText2}/>
    </div>
  );
};

export default DetailRowCarCard;
