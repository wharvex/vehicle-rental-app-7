"use client";
import MainContentBreadcrumbsGroup from "@/components/confirm-res-main-content-breadcrumbs-gro";
import Layout from "../../components/my-layout";
import MainContentDetailsGroupContainer from "@/components/confirm-res-main-content-details-group-container";
import MainContentProceedButton from "@/components/confirm-res-main-content-proceed-button";
import { useSearchParams } from "next/navigation";
import {
  ConfirmResSearchParams,
  ConfirmResSearchParamsType,
} from "@/models/confirm-res-search-params";

export default function Page() {
  const searchParams = useSearchParams();
  const params = ConfirmResSearchParams.parse({
    pickupLot: searchParams?.get("pickupLot"),
    returnLot: searchParams?.get("returnLot"),
    pickupDate: searchParams?.get("pickupDate"),
    returnDate: searchParams?.get("returnDate"),
    selectedCar: searchParams?.get("selectedCar"),
  });
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
        mainChild2={
          <MainContentDetailsGroupContainer
            pickupLotID={params.pickupLot}
            returnLotID={params.returnLot}
            pickupDate={params.pickupDate}
            returnDate={params.returnDate}
            selectedCarID={params.selectedCar}
          />
        }
        mainChild3={<MainContentProceedButton />}
      />
    </div>
  );
}
