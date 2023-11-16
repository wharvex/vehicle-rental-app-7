import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import IconRadioChoiceUnselect from "./icon-radio-choice-unselect";
import ContentRadioChoice from "./content-radio-choice";

type RadioChoiceType = {
  text?: string;

  /** Style props */
  iconRadioChoiceUnselectBoxSizing?: CSSProperties["boxSizing"];
};

const RadioChoice: NextPage<RadioChoiceType> = ({
  text,
  iconRadioChoiceUnselectBoxSizing,
}) => {
  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: iconRadioChoiceUnselectBoxSizing,
    };
  }, [iconRadioChoiceUnselectBoxSizing]);

  return (
    <div className="h-11 flex flex-row items-center justify-start py-0 px-[15px] box-border gap-[20px] self-stretch">
      <IconRadioChoiceUnselect iconRadioChoiceUnselectBoxSizing="border-box" />
      <ContentRadioChoice text="Location" />
    </div>
  );
};

export default RadioChoice;
