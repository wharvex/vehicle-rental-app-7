import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ImageHeaderPageLogo from "./image-header-page-logo";
import ImageHeaderPageHamgurge from "./image-header-page-hamgurge";
import TemporaryDrawer from "./drawer";

type HeaderPageType = {
  image?: string;
  image1?: string;

  /** Style props */
  headerPageBackgroundImage?: CSSProperties["backgroundImage"];
  headerPageFlexShrink?: CSSProperties["flexShrink"];
  imageHeaderPageLogoCursor?: CSSProperties["cursor"];
  headerPageBoxSizing?: CSSProperties["boxSizing"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const HeaderPage: NextPage<HeaderPageType> = ({
  image,
  image1,
  headerPageBackgroundImage,
  headerPageFlexShrink,
  imageHeaderPageLogoCursor,
  headerPageBoxSizing,
  onImageHeaderPageLogoClick,
}) => {
  const headerPageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: headerPageBackgroundImage,
      flexShrink: headerPageFlexShrink,
      boxSizing: headerPageBoxSizing,
    };
  }, [headerPageBackgroundImage, headerPageFlexShrink, headerPageBoxSizing]); // dependency array

  const imageHeaderPageLogoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: imageHeaderPageLogoCursor,
    };
  }, [imageHeaderPageLogoCursor]);

  return (
    <header
      // make className a generated string
      className="overflow-hidden flex flex-row items-center justify-between py-5 px-[100px] box-border bg-[url('/header--page@3x.png')] bg-cover bg-no-repeat bg-[top] self-stretch"
      // allow implementer to override any styles (bad idea)
      style={headerPageStyle}
    >
      <ImageHeaderPageLogo
        image="/image1@2x.png"
      />
      <TemporaryDrawer />
    </header>
  );
};

export default HeaderPage;
