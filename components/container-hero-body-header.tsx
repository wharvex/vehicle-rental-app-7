import type { NextPage } from "next";

const ContainerHeroBodyHeader: NextPage = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col items-start justify-start p-2.5 gap-[60px] text-center text-36xl text-black font-body-large">
      <div className="flex flex-row items-start justify-start">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          Reserve a Vehicle
        </div>
      </div>
      <div className="w-[500px] flex flex-row items-start justify-start text-left text-21xl">
        <i className="relative tracking-[0.5px] leading-[100%] flex items-center w-[500px] shrink-0">
          Choose a Pickup/Dropoff Location
        </i>
      </div>
    </div>
  );
};

export default ContainerHeroBodyHeader;
