import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const Page: NextPage = () => {
  const router = useRouter();

  const onImageHeaderPageLogoClick = () => {
    router.push("/page");
  };

  return (
    <div className="relative bg-white w-full h-[1664px] overflow-hidden flex flex-col items-center justify-start">
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
    </div>
  );
};

export default Page;
