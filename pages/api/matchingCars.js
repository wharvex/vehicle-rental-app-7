import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { pickupLot, returnLot, pickupDate, returnDate } = req.query;
  const pickupDateObj = new Date(pickupDate);
  const returnDateObj = new Date(returnDate);
  const pickupLotId = pickupLot;
  const returnLotId = returnLot;

  try {
    const availableCars = await prisma.car.findMany({
      where: {
        OR: [
          { AND: [
            { current_lot_id: pickupLotId },
            { reservations: {
              none: {
                AND: [
                  { pickup_date: { lt: returnDateObj } },
                  { return_date: { gt: pickupDateObj } },
                ],
              }
            },
            },
          ],
          },
          { current_lot_id: { not: pickupLotId },
          reservations: {
            some: {
              return_lot_id: pickupLotId,
              return_date: { lte: pickupDateObj }
            },
            none: {
              AND: [
                { pickup_date: { lt: returnDateObj } },
                { return_date: { gt: pickupDateObj } },
              ],
            },
          },
          },
        ],
      },
      include: {
        make: true,
        model: true,
        car_type: true,
      },
    });
    res.status(200).json(availableCars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
}
