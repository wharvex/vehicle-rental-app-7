import clsx from "clsx";

export default function ConnectorBreadcrumbsGroup() {
  const classStr = clsx(
    "box-border",
    "w-full",
    "h-[88px]",
    "flex-1",
    "border-b-[2px]",
    "border-solid",
    "border-black"
  );
  return <div className={classStr}></div>;
}
