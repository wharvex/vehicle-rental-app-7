import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MenuRadioChoices from "./menu-radio-choices";
import ButtonSmallSmall from "./button-small-small";

type ContainerRadioChoiceMenuType = {
  /** Style props */
  containerRadioChoiceMenuBoxSizing?: CSSProperties["boxSizing"];
  menuRadioChoicesBoxSizing?: CSSProperties["boxSizing"];
  menuRadioChoicesBoxSizing1?: CSSProperties["boxSizing"];
  menuRadioChoicesBoxSizing2?: CSSProperties["boxSizing"];
  menuRadioChoicesBoxSizing3?: CSSProperties["boxSizing"];
};

const ContainerRadioChoiceMenu: NextPage<ContainerRadioChoiceMenuType> = ({
  containerRadioChoiceMenuBoxSizing,
  menuRadioChoicesBoxSizing,
  menuRadioChoicesBoxSizing1,
  menuRadioChoicesBoxSizing2,
  menuRadioChoicesBoxSizing3,
}) => {
  const containerRadioChoiceMenuStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: containerRadioChoiceMenuBoxSizing,
    };
  }, [containerRadioChoiceMenuBoxSizing]);

  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: menuRadioChoicesBoxSizing,
    };
  }, [menuRadioChoicesBoxSizing]);

  const iconRadioChoiceUnselectStyle1: CSSProperties = useMemo(() => {
    return {
      boxSizing: menuRadioChoicesBoxSizing1,
    };
  }, [menuRadioChoicesBoxSizing1]);

  const iconRadioChoiceUnselectStyle2: CSSProperties = useMemo(() => {
    return {
      boxSizing: menuRadioChoicesBoxSizing2,
    };
  }, [menuRadioChoicesBoxSizing2]);

  const iconRadioChoiceUnselectStyle3: CSSProperties = useMemo(() => {
    return {
      boxSizing: menuRadioChoicesBoxSizing3,
    };
  }, [menuRadioChoicesBoxSizing3]);

  return (
    <div
      className="bg-white overflow-hidden flex flex-col items-center justify-start p-2.5 gap-[20px]"
      style={containerRadioChoiceMenuStyle}
    >
      <MenuRadioChoices
        radioChoiceBoxSizing="border-box"
        radioChoiceBoxSizing1="border-box"
        radioChoiceBoxSizing2="border-box"
        radioChoiceBoxSizing3="border-box"
      />
      <ButtonSmallSmall text="Go!" makeGreen={true} />
    </div>
  );
};

export default ContainerRadioChoiceMenu;
