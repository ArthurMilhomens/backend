import { PrismaClient, Card } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCardList(data: Card[]): Promise<void> {
    await prisma.card.createMany({
        data: data
    });

    return
}

export async function createCardListTest(data: any[]): Promise<void> {

    // await prisma.batch(data, { transaction: true });
    await prisma.$transaction(data);

    return
}