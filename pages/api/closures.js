import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { lotId } = req.query;

  if (isNaN(parseInt(lotId))) {
    res.status(400).json({ error: 'Invalid lotId provided' });
    return;
  }

  try {
    const closures = await prisma.closure.findMany({
      where: {
        lots: {
          some: {
            id: parseInt(lotId),
          }
        }
      },
    });
    res.status(200).json(closures);
  } catch (error) {
    console.error('Error fetching closures:', error);
    res.status(500).json({ error: 'Failed to fetch closures' });
  }
}