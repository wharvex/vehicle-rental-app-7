import prisma from '@/lib/prisma';

export default async function handler(req, res) {
    const {pickupLot, returnLot, pickupDate, returnDate} = req.query;
    const pickupDateObj = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);
    const pickupLotId = pickupLot;
    const returnLotId = returnLot;

    // if (isNaN(parsedPickupLotId) || isNaN(parsedReturnLotId)) {
    //     throw new Error('Invalid lot IDs');
    //   }

    try{
        const availableCars = await prisma.car.findMany({
            where: {
                AND: [
                    { current_lot_id: pickupLotId },
                    { reservations: {
                        none: {
                        OR: [
                            {
                            AND: [
                                { pickup_date: { lte: new Date(returnDate) } },
                                { return_date: { gte: new Date(pickupDate) } },
                            ],
                            },
                            {
                            AND: [
                                { pickup_lot_id: pickupLotId },
                                { return_lot_id: returnLotId },
                            ],
                            },
                        ],
                        },
                    },
                    },
                ],
            },
            select: {
                year: true,
                make: true,
                model: true,
                car_type: true,
                image_path: true,
            },
        });
        console.log('found cars: ', availableCars);
        res.status(200).json(availableCars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Failed to fetch cars' });
      }
};
