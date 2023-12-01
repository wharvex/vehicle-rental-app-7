import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  try {
    const lots = await prisma.lot.findMany({
      orderBy: {
        name: 'asc',
      }
    });
    res.status(200).json(lots);
  } catch (error) {
    console.error('Error fetching lots:', error);
    res.status(500).json({ error: 'Failed to fetch lots' });
  }
}