import NavCard from "./nav-card";
import clsx from "clsx";

export default function MainContentCardsGroup() {
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
      <NavCard imgSrc="/star-1@2x.png" text="Read Testimonials" />
      <NavCard imgSrc="/carsportoutline-1@2x.png" text="Browse Vehicles" />
      <NavCard imgSrc="/calendar-1@2x.png" text="Choose Dates" />
    </div>
  );
}
