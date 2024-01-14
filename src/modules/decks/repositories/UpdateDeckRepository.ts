import { PrismaClient, Deck } from "@prisma/client";
import { CreateDeck } from "../model/deck";

export async function updateDeck(id: string, data: CreateDeck): Promise<Deck> {
    const prisma = new PrismaClient();

    const deleteCards = prisma.deck.update({
        where: { id },
        data: {
            name: data.name,
            colors: data.colors,
            cards: {
                deleteMany: {}
            },
        }
    });

    const deck = prisma.deck.update({
        where: { id },
        data: {
            name: data.name,
            colors: data.colors,
            cards: {
                create: data.cards
            },
        }
    });

    await prisma.$transaction([deleteCards, deck]);

    return deck
}