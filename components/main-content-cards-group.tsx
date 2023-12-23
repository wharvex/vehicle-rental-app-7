import MainCard from "./main-card";
import CardVehicles from "./card-vehicles";
import CardDates from "./card-dates";
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
      <MainCard
        imgSrc="/star-1@2x.png"
        headerText="Read Testimonials"
        cardTestimonialsFlex="1"
        cardTestimonialsBoxSizing="border-box"
      />
      <CardVehicles cardVehiclesFlex="1" cardVehiclesBoxSizing="border-box" />
      <CardDates
        calendar1="/calendar-1@2x.png"
        cardDatesFlex="1"
        cardDatesBoxSizing="border-box"
      />
    </div>
  );
}
