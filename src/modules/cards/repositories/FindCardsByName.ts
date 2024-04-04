import { PrismaClient, Card } from "@prisma/client";

const prisma = new PrismaClient();

export async function findCardsByName(data: string[]): Promise<Card[]> {

    const cards = await prisma.card.findMany({
        where: {
            name: { 
                in: data,
                mode: 'insensitive',
            },
        },
        distinct: ['name']
    });

    return cards
}