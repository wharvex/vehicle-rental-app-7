import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import HeaderPage from "./header-page";
import Main from "./main";
import FooterPage from "./footer-page";

type LayoutType = {
  /** Style props */
  layoutBoxSizing?: CSSProperties["boxSizing"];
  layoutBoxSizing1?: CSSProperties["boxSizing"];
  headerPageBoxSizing?: CSSProperties["boxSizing"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const Layout: NextPage<LayoutType> = ({
  layoutBoxSizing,
  layoutBoxSizing1,
  headerPageBoxSizing,
  onImageHeaderPageLogoClick,
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
      <HeaderPage
        image="/image2@2x.png"
        image1="/image3@2x.png"
        headerPageBoxSizing="border-box"
        headerPageBackgroundImage="url('/header--page1@3x.png')"
        headerPageFlexShrink="0"
        imageHeaderPageLogoCursor="pointer"
        headerPageBoxSizing="border-box"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
      <Main
        mainContentHeroBoxSizing="border-box"
        mainContentHeroBoxSizing1="border-box"
        mainContentHeroBoxSizing2="border-box"
        mainContentHeroBoxSizing3="border-box"
      />
      <FooterPage
        footerPageBackgroundImage="url('/footer--page1@3x.png')"
        footerPageFlexShrink="0"
      />
    </div>
  );
};

export default Layout;
