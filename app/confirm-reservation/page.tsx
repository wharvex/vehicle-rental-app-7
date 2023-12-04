import MainContentBreadcrumbsGroup from "@/components/confirm-res-main-content-breadcrumbs-gro";
import Layout from "../../components/my-layout";
import MainContentDetailsGroupContainer from "@/components/confirm-res-main-content-details-group-g";
import MainContentProceedButton from "@/components/confirm-res-main-content-proceed-button";

export default async function Page() {
  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] w-full h-full flex flex-col items-center justify-start"
      style={{ flexShrink: 0 }}
    >
      <Layout
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        mainChild1={
          <MainContentBreadcrumbsGroup
            {...[
              { labelText: "Browse", checked: true },
              { labelText: "Confirm Reservation", checked: false },
              { labelText: "Submit Payment", checked: false },
            ]}
          />
        }
        mainChild2={<MainContentDetailsGroupContainer />}
        mainChild3={<MainContentProceedButton />}
      />
    </div>
  );
}
