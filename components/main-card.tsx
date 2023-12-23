import { useMemo, type CSSProperties } from "react";
import HeaderCard from "./header-card";
import Image from "next/image";

type MainCardProps = {
  imgSrc: string;
  headerText: string;

  /** Style props */
  cardTestimonialsFlex?: CSSProperties["flex"];
  cardTestimonialsBoxSizing?: CSSProperties["boxSizing"];
};

export default function MainCard(fn: MainCardProps) {
  const cardTestimonialsStyle: CSSProperties = useMemo(() => {
    return {
      flex: fn.cardTestimonialsFlex,
      boxSizing: fn.cardTestimonialsBoxSizing,
    };
  }, [fn.cardTestimonialsFlex, fn.cardTestimonialsBoxSizing]);

  return (
    <div
      className="rounded-xl [background:linear-gradient(180deg,_#e5aeff,_rgba(255,_174,_174,_0))] overflow-hidden flex flex-col items-center justify-center p-[50px] gap-[50px] border-[1px] border-solid border-black"
      style={cardTestimonialsStyle}
    >
      <div className="flex flex-row items-center justify-center">
        <Image
          className="relative w-[100px] h-[100px] object-cover"
          width={100}
          height={100}
          alt=""
          src={fn.imgSrc}
        />
      </div>
      <HeaderCard text="Read Testimonials" />
    </div>
  );
}
