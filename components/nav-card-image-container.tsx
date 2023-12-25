import Image from "next/image";

type NavCardImageContainerProps = {
  imgSrc: string;
};

export default function NavCardImageContainer(fn: NavCardImageContainerProps) {
  return (
    <div>
      <Image
        className="relative w-[100px] h-[100px] object-cover"
        width={100}
        height={100}
        alt=""
        src={fn.imgSrc}
      />
    </div>
  );
}
