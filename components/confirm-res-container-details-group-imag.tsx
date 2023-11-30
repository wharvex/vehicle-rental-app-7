import type { NextPage } from "next";
import ImageDetailsGroupGeneri from "./confirm-res-image-details-group-generi";

type ContainerDetailsGroupImagType = {
  image?: string;
};

const ContainerDetailsGroupImag: NextPage<ContainerDetailsGroupImagType> = ({
  image,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start py-[13px] pr-[50px] pl-[23px]">
      <ImageDetailsGroupGeneri imageDimensions="/confirm-res-image2@2x.png" />
    </div>
  );
};

export default ContainerDetailsGroupImag;
