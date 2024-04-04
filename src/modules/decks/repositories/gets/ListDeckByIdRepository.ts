import { PrismaClient, Deck } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDeckById(id: string): Promise<Deck> {

    const deck = await prisma.deck.findUniqueOrThrow({
        where: { id },
        select: {
            id: true,
            name: true,
            colors: true,
            userId: true,
            cards: {
                select: {
                    card: true
                }
            }
        }
    });

    return deck
}