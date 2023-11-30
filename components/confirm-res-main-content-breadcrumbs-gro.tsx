import type { NextPage } from "next";
import Breadcrumb from "./confirm-res-breadcrumb";
import ConnectorBreadcrumbsGroup from "./confirm-res-connector-breadcrumbs-group";

const MainContentBreadcrumbsGroup: NextPage = () => {
  return (
    <div className="w-[1440px] h-[137px] flex flex-row items-center justify-center py-0 px-[100px] box-border gap-[10px]">
      <Breadcrumb />
      <ConnectorBreadcrumbsGroup connectorBreadcrumbsGroupHeight="88px" />
      <Breadcrumb />
      <ConnectorBreadcrumbsGroup connectorBreadcrumbsGroupHeight="88px" />
      <Breadcrumb />
    </div>
  );
};

export default MainContentBreadcrumbsGroup;
