import { PrismaClient, Deck } from "@prisma/client";
import { CreateDeck } from "../model/deck";

export async function updateDeck(id: string, data: CreateDeck): Promise<Deck> {
    const prisma = new PrismaClient();

    const deck = await prisma.deck.update({
        where: { id },
        data: {
            name: data.name,
            colors: data.colors,
        }
    });

    return deck
}