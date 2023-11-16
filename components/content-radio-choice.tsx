import type { NextPage } from "next";

type ContentRadioChoiceType = {
  text?: string;
};

const ContentRadioChoice: NextPage<ContentRadioChoiceType> = ({
  text = "Location",
}) => {
  return (
    <div className="flex flex-row items-center justify-center p-2.5 text-left text-11xl text-gray-900 font-body-large">
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {text}
      </div>
    </div>
  );
};

export default ContentRadioChoice;
