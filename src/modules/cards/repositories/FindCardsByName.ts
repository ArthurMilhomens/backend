import { PrismaClient, Card } from "@prisma/client";

export async function findCardsByName(data: string[]): Promise<Card[]> {
    const prisma = new PrismaClient();

    const cards = await prisma.card.findMany({
        where: {
            name: { 
                in: data,
                mode: 'insensitive'
            }
        }
    });

    return cards
}