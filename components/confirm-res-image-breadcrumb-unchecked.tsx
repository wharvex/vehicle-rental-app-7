import type { NextPage } from "next";

type BreadcrumbImageContainerProps = {
  checked: boolean;
};

export default function BreadcrumbImageContainer(
  fn: BreadcrumbImageContainerProps
) {
  const imageSrc = fn.checked
    ? "/confirm-res-image5@2x.png"
    : "/confirm-res-image4@2x.png";
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        className="relative w-[52px] h-[51px] object-cover"
        alt=""
        src={imageSrc}
      />
    </div>
  );
}
