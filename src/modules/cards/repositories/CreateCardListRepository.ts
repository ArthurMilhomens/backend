import { PrismaClient, Deck, Card } from "@prisma/client";

export async function createCardList(data: Card[]): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.card.createMany({
        data: data
    });

    return
}