import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type IconRadioChoiceUnselectType = {
  /** Style props */
  iconRadioChoiceUnselectBoxSizing?: CSSProperties["boxSizing"];
};

const IconRadioChoiceUnselect: NextPage<IconRadioChoiceUnselectType> = ({
  iconRadioChoiceUnselectBoxSizing,
}) => {
  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: iconRadioChoiceUnselectBoxSizing,
    };
  }, [iconRadioChoiceUnselectBoxSizing]);

  return (
    <div
      className="overflow-hidden flex flex-row items-start justify-start p-0.5"
      style={iconRadioChoiceUnselectStyle}
    >
      <img
        className="relative w-[19.5px] h-[19.5px]"
        alt=""
        src="/vector-stroke.svg"
      />
    </div>
  );
};

export default IconRadioChoiceUnselect;
