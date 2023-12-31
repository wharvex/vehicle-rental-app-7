import clsx from "clsx";
import { Breadcrumb, BreadcrumbProps } from "./confirm-res-breadcrumb";
import ConnectorBreadcrumbsGroup from "./confirm-res-connector-breadcrumbs-group";

type MainContentBreadcrumbsGroupProps = [
  BreadcrumbProps,
  BreadcrumbProps,
  BreadcrumbProps
];

export default function MainContentBreadcrumbsGroup(
  fn: MainContentBreadcrumbsGroupProps
) {
  const classStr = clsx(
    "w-full",
    "h-[137px]",
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "py-[85px]",
    "px-[100px]",
    "box-border",
    "gap-[10px]"
  );
  return (
    <div className={classStr}>
      <Breadcrumb {...fn[0]} />
      <ConnectorBreadcrumbsGroup />
      <Breadcrumb {...fn[1]} />
      <ConnectorBreadcrumbsGroup />
      <Breadcrumb {...fn[2]} />
    </div>
  );
}
