import type { NextPage } from "next";

const ImageCardCalendar: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img
        className="relative w-[100px] h-[100px] object-cover"
        alt=""
        src="/calendar-11@2x.png"
      />
    </div>
  );
};

export default ImageCardCalendar;
