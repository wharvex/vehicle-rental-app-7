import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ImageFooterLogo from "./image-footer-logo";
import ButtonSmallSmall from "/";

type FooterPageType = {
  /** Style props */
  footerPageBackgroundImage?: CSSProperties["backgroundImage"];
  footerPageFlexShrink?: CSSProperties["flexShrink"];
};

const FooterPage: NextPage<FooterPageType> = ({
  footerPageBackgroundImage,
  footerPageFlexShrink,
}) => {
  const footerPageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: footerPageBackgroundImage,
      flexShrink: footerPageFlexShrink,
    };
  }, [footerPageBackgroundImage, footerPageFlexShrink]);

  return (
    <footer
      className="overflow-hidden flex flex-row items-center justify-between py-5 px-[100px] box-border bg-[url('/footer--page@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-13xl text-black font-header-footer-button-small self-stretch"
      style={footerPageStyle}
    >
      <div className="flex flex-row items-center justify-center p-2.5">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center w-[397px] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`© 2023 “Borrow Our Cars” &`}</p>
            <p className="m-0">“:thumbsup: design”</p>
          </span>
        </div>
      </div>
      <ImageFooterLogo
        imageFooterLogoPosition="relative"
        imageFooterLogoFlexShrink="0"
      />
      <ButtonSmallSmall buttonText="Get Help" />
      <div className="flex flex-row items-center justify-center p-2.5">
        <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[86px] shrink-0">
          About
        </a>
      </div>
    </footer>
  );
};

export default FooterPage;
