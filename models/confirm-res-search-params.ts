import { z } from "zod";

export const ConfirmResSearchParams = z.object({
  pickupLot: z.string().catch(""),
  returnLot: z.string().catch(""),
  pickupDate: z.string().catch(""),
  returnDate: z.string().catch(""),
  selectedCar: z.string().catch(""),
});

export type ConfirmResSearchParamsType = z.infer<typeof ConfirmResSearchParams>;
