import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import RadioChoice from "./radio-choice";

type MenuRadioChoicesType = {
  /** Style props */
  radioChoiceBoxSizing?: CSSProperties["boxSizing"];
  radioChoiceBoxSizing1?: CSSProperties["boxSizing"];
  radioChoiceBoxSizing2?: CSSProperties["boxSizing"];
  radioChoiceBoxSizing3?: CSSProperties["boxSizing"];
};

const MenuRadioChoices: NextPage<MenuRadioChoicesType> = ({
  radioChoiceBoxSizing,
  radioChoiceBoxSizing1,
  radioChoiceBoxSizing2,
  radioChoiceBoxSizing3,
}) => {
  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: radioChoiceBoxSizing,
    };
  }, [radioChoiceBoxSizing]);

  const iconRadioChoiceUnselectStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: radioChoiceBoxSizing1,
    };
  }, [radioChoiceBoxSizing1]);

  const iconRadioChoiceUnselectStyle2: CSSProperties = useMemo(() => {
    return {
      boxSizing: radioChoiceBoxSizing2,
    };
  }, [radioChoiceBoxSizing2]);

  const iconRadioChoiceUnselectStyle3: CSSProperties = useMemo(() => {
    return {
      boxSizing: radioChoiceBoxSizing3,
    };
  }, [radioChoiceBoxSizing3]);

  return (
    <div className="rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start">
      <RadioChoice
        text="Albany"
        iconRadioChoiceUnselectBoxSizing="border-box"
      />
      <RadioChoice
        text="Rhinebeck"
        iconRadioChoiceUnselectBoxSizing="border-box"
      />
      <RadioChoice
        text="Poughkeepsie"
        iconRadioChoiceUnselectBoxSizing="border-box"
      />
      <RadioChoice
        text="White Plains"
        iconRadioChoiceUnselectBoxSizing="border-box"
      />
    </div>
  );
};

export default MenuRadioChoices;
