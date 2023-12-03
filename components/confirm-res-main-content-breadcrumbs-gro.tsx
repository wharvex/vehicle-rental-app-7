import type { NextPage } from "next";
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
  return (
    <div className="w-full h-[137px] flex flex-row items-center justify-center py-[85px] px-[100px] box-border gap-[10px]">
      <Breadcrumb {...fn[0]} />
      <ConnectorBreadcrumbsGroup connectorBreadcrumbsGroupHeight="88px" />
      <Breadcrumb {...fn[1]} />
      <ConnectorBreadcrumbsGroup connectorBreadcrumbsGroupHeight="88px" />
      <Breadcrumb {...fn[2]} />
    </div>
  );
}
