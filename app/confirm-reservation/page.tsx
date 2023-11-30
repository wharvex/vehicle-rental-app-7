import MainContentBreadcrumbsGroup from "@/components/confirm-res-main-content-breadcrumbs-gro";
import Layout from "../../components/my-layout";

export default async function Page() {
  return (
    <div
      className="bg-aliceblue w-[1440px] h-[1748px] flex flex-col items-center justify-start"
      style={{ flexShrink: 0 }}
    >
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        mainChild1={<MainContentBreadcrumbsGroup />}
      />
    </div>
  );
}
