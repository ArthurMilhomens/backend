import { PrismaClient, Deck } from "@prisma/client";

export async function getDeckById(id: string): Promise<Deck> {
    const prisma = new PrismaClient();

    const deck = await prisma.deck.findUniqueOrThrow({
        where: { id }
    });

    return deck
}