import type { NextPage } from "next";
import LabelBreadcrumb from "./confirm-res-label-breadcrumb";
import ImageBreadcrumbUnchecked from "./confirm-res-image-breadcrumb-unchecked";

const Breadcrumb: NextPage = () => {
  return (
    <div className="h-[137px] flex flex-col items-center justify-start gap-[10px]">
      <LabelBreadcrumb text="Step X" />
      <ImageBreadcrumbUnchecked />
    </div>
  );
};

export default Breadcrumb;
