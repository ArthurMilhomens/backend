import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteAllDecks() {

    const deleteCardsOnDecks = prisma.cardsOnDecks.deleteMany();
    const deleteDecks = prisma.deck.deleteMany();

    await prisma.$transaction([deleteCardsOnDecks, deleteDecks]);

    return
}