import clsx from "clsx";

type ButtonSmallSmallProps = {
  text: string;
  makeGreen: boolean;
};

export default function ButtonSmallSmall(fn: ButtonSmallSmallProps) {
  const classStr = clsx(
    "rounded-3xs",
    fn.makeGreen && "bg-lime",
    "box-border",
    "w-[214px]",
    "h-[82px]",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-center",
    "text-21xl",
    "text-black",
    "font-header-footer-button-small",
    "border-[2px]",
    "border-solid",
    "border-black"
  );
  const classStr2 = clsx(
    "self-stretch",
    "flex-1",
    "relative",
    "tracking-[0.5px]",
    "leading-[100%]",
    "font-medium",
    "flex",
    "items-center",
    "justify-center"
  );
  return (
    <div className={classStr}>
      <div className={classStr2}>{fn.text}</div>
    </div>
  );
}
