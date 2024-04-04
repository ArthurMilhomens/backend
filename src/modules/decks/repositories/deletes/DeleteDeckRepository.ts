import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function deleteDeck(id: string) {

    const deleteCardsOnDecks = prisma.cardsOnDecks.deleteMany({
        where: { deckId: id }
    });

    const deleteDeck = prisma.deck.delete({
        where: { id }
    });

    await prisma.$transaction([deleteCardsOnDecks, deleteDeck]); 

    return
}