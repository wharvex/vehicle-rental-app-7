import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import HeaderCard from "./header-card";

type CardTestimonialsType = {
  star1?: string;

  /** Style props */
  cardTestimonialsFlex?: CSSProperties["flex"];
  cardTestimonialsBoxSizing?: CSSProperties["boxSizing"];
};

const CardTestimonials: NextPage<CardTestimonialsType> = ({
  star1,
  cardTestimonialsFlex,
  cardTestimonialsBoxSizing,
}) => {
  const cardTestimonialsStyle: CSSProperties = useMemo(() => {
    return {
      flex: cardTestimonialsFlex,
      boxSizing: cardTestimonialsBoxSizing,
    };
  }, [cardTestimonialsFlex, cardTestimonialsBoxSizing]);

  return (
    <div
      className="rounded-xl [background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))] overflow-hidden flex flex-col items-center justify-center p-[50px] gap-[50px] border-[1px] border-solid border-black"
      style={cardTestimonialsStyle}
    >
      <div className="flex flex-row items-center justify-center">
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt=""
          src={star1}
        />
      </div>
      <HeaderCard text="Read Testimonials" />
    </div>
  );
};

export default CardTestimonials;
