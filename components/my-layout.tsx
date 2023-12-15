import type { NextPage } from "next";
import { useMemo, type CSSProperties, ReactElement } from "react";
import HeaderPage from "./header-page";
import Main from "./main";
import FooterPage from "./footer-page";

type LayoutType = {
  /** Style props */
  layoutBoxSizing?: CSSProperties["boxSizing"];
  layoutBoxSizing1?: CSSProperties["boxSizing"];
  headerPageBoxSizing?: CSSProperties["boxSizing"];

  /** Main child props */
  mainChild1?: ReactElement;
  mainChild2?: ReactElement;
  mainChild3?: ReactElement;
};

const Layout: NextPage<LayoutType> = ({
  layoutBoxSizing,
  layoutBoxSizing1,
  headerPageBoxSizing,
  mainChild1,
  mainChild2,
  mainChild3,
}) => {
  const headerPageStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: layoutBoxSizing,
    };
  }, [layoutBoxSizing]);

  const imageHeaderPageHamgurgeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: layoutBoxSizing1,
    };
  }, [layoutBoxSizing1]);

  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: headerPageBoxSizing,
    };
  }, [headerPageBoxSizing]);

  return (
    <div className="bg-aliceblue w-[1440px] overflow-y-auto flex flex-col items-start justify-start flex-1">
      <Main
        mainContentHeroBoxSizing="border-box"
        mainContentHeroBoxSizing1="border-box"
        mainContentHeroBoxSizing2="border-box"
        mainContentHeroBoxSizing3="border-box"
        mainChild1={mainChild1}
        mainChild2={mainChild2}
        mainChild3={mainChild3}
      />
    </div>
  );
};

export default Layout;
