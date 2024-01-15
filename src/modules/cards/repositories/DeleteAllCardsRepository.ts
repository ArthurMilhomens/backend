import { PrismaClient, Card } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteAllCards(): Promise<void> {

    const deleteCardsOnDecks = prisma.cardsOnDecks.deleteMany();
    const deleteCards = prisma.card.deleteMany();

    await prisma.$transaction([deleteCardsOnDecks, deleteCards]);

    return 
}