import { PrismaClient, Card } from "@prisma/client";

export async function findAllCards(): Promise<number> {
    const prisma = new PrismaClient();

    const cards = await prisma.card.count();

    return cards
}