import clsx from "clsx";

type NavCardTextContainerProps = {
  text: string;
};

export default function NavCardTextContainer(fn: NavCardTextContainerProps) {
  const classStrOuter = clsx(
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "p-2.5",
    "text-center",
    "text-21xl",
    "text-black",
    "font-body-large"
  );
  const classStrInner = clsx(
    "relative",
    "tracking-[0.5px]",
    "leading-[100%]",
    "font-medium",
    "inline-block",
    "w-[250px]",
    "shrink-0"
  );
  return (
    <div className={classStrOuter}>
      <div className={classStrInner}>{fn.text}</div>
    </div>
  );
}
