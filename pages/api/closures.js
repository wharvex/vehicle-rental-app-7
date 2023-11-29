import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { lotId } = req.query;

  try {
    const closures = await prisma.closure.findMany({
      where: {
        lots: {
          some: {
            id: lotId,
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