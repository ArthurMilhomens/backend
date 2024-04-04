import { PrismaClient, Card } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAllCards(): Promise<number> {

    const cards = await prisma.card.count();

    return cards
}