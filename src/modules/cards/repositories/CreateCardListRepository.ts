import { PrismaClient, Card } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCardList(data: Card[]): Promise<void> {

    await prisma.card.createMany({
        data: data
    });

    return
}