import clsx from "clsx";

export default function MainContentDashboard() {
  const classStr = clsx(
    "bg-aliceblue",
    "w-full",
    "overflow-hidden",
    "flex",
    "flex-row",
    "items-center",
    "justify-center",
    "p-[50px]",
    "box-border",
    "gap-[50px]"
  );
  return (
    <div className={classStr}>
      <p>hi</p>
    </div>
  );
}
