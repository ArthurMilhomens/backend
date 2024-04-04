import { PrismaClient, Deck } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDeckByUserId(id: string): Promise<Deck[]> {

    const decks = await prisma.deck.findMany({
        where: { userId: id },
        select: {
            id: true,
            name: true,
            colors: true,
            userId: true,
            cards: {
                select: {
                    card: true,
                    qtd: true,
                }
            }
        }
    });

    return decks
}