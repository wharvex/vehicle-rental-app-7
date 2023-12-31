"use client";
import MainContentBreadcrumbsGroup from "@/components/confirm-res-main-content-breadcrumbs-gro";
import MainContentDetailsGroupContainer from "@/components/confirm-res-main-content-details-group-container";
import MainContentProceedButtonsContainer from "@/components/confirm-res-main-content-proceed-button";
import { useSearchParams } from "next/navigation";
import {
  ConfirmResSearchParams,
} from "@/models/confirm-res-search-params";
import clsx from "clsx";

export default function Page() {
  const searchParams = useSearchParams();
  const params = ConfirmResSearchParams.parse({
    pickupLot: searchParams?.get("pickupLot"),
    returnLot: searchParams?.get("returnLot"),
    pickupDate: searchParams?.get("pickupDate"),
    returnDate: searchParams?.get("returnDate"),
    selectedCar: searchParams?.get("selectedCar"),
  });
  const classStr = clsx(
    "[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] w-full h-full flex flex-col items-center justify-start"
  );
  return (
    <>
      <MainContentBreadcrumbsGroup
        {...[
          { labelText: "Browse", checked: true },
          { labelText: "Confirm Reservation", checked: false },
          { labelText: "Submit Payment", checked: false },
        ]}
      />
      <MainContentDetailsGroupContainer {...params} />
      <MainContentProceedButtonsContainer />
    </>
  );
}
