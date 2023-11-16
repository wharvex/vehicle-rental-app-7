import type { NextPage } from "next";
import CardTestimonials from "./card-testimonials";
import CardVehicles from "./card-vehicles";
import CardDates from "./card-dates";

const MainContentCardsGroup: NextPage = () => {
  return (
    <div className="bg-aliceblue w-[1440px] overflow-hidden flex flex-row items-center justify-center p-[50px] box-border gap-[50px]">
      <CardTestimonials
        star1="/star-1@2x.png"
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
};

export default MainContentCardsGroup;
