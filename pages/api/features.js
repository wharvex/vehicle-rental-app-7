import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { features } = req.query;
  console.log("featureIDS: ", features)
  const splitFeatures = features.split(",");
  try {
    const carFeatures = await prisma.carFeature.findMany({
        where: {
          id: {
            in: splitFeatures,
          },
        },
      });
    console.log(carFeatures);
    res.status(200).json(carFeatures);
  } catch (error) {
    console.error('Error fetching features:', error);
    res.status(500).json({ error: 'Failed to fetch features' });
  }
}