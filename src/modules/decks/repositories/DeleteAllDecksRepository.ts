import { PrismaClient } from "@prisma/client";

export async function deleteAllDecks() {
    const prisma = new PrismaClient();

    const deleteCardsOnDecks = prisma.cardsOnDecks.deleteMany();
    const deleteDecks = prisma.deck.deleteMany();

    await prisma.$transaction([deleteCardsOnDecks, deleteDecks])

    return
}