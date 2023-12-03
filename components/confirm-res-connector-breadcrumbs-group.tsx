import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ConnectorBreadcrumbsGroupType = {
  /** Style props */
  connectorBreadcrumbsGroupHeight?: CSSProperties["height"];
};

const ConnectorBreadcrumbsGroup: NextPage<ConnectorBreadcrumbsGroupType> = ({
  connectorBreadcrumbsGroupHeight,
}) => {
  const connectorBreadcrumbsGroupStyle: CSSProperties = useMemo(() => {
    return {
      height: connectorBreadcrumbsGroupHeight,
    };
  }, [connectorBreadcrumbsGroupHeight]);

  return (
    <div
      className="box-border w-full h-[100px] flex-1 border-b-[2px] border-solid border-black"
      style={connectorBreadcrumbsGroupStyle}
    />
  );
};

export default ConnectorBreadcrumbsGroup;
