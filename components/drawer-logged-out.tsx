import type { NextPage } from "next";
import { useEffect } from "react";
import LinkHamburgerNonBottomCont from "./link-hamburger-non-bottom-cont";
import LinkHamburgerBottomContaine from "./link-hamburger-bottom-containe";

type DrawerLoggedOutType = {
  onClose?: () => void;
};

const DrawerLoggedOut: NextPage<DrawerLoggedOutType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="bg-white w-[400px] overflow-hidden flex flex-col items-center justify-start p-[30px] box-border gap-[10px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] h-full max-w-[90%]"
      data-animate-on-scroll
    >
      <LinkHamburgerNonBottomCont linkText="Reserve" />
      <LinkHamburgerNonBottomCont linkText="Login" />
      <LinkHamburgerBottomContaine linkText="Sign Up" />
    </div>
  );
};

export default DrawerLoggedOut;
