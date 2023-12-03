import type { NextPage } from "next";
import BreadcrumbLabel from "./confirm-res-label-breadcrumb";
import BreadcrumbImageContainer from "./confirm-res-image-breadcrumb-unchecked";

export type BreadcrumbProps = {
  labelText: string;
  checked: boolean;
};

export function Breadcrumb(fn: BreadcrumbProps) {
  return (
    <div className="h-[137px] flex flex-col items-center justify-start gap-[10px]">
      <BreadcrumbLabel text={fn.labelText} />
      <BreadcrumbImageContainer checked={fn.checked} />
    </div>
  );
}
