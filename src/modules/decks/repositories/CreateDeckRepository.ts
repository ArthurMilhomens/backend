import { PrismaClient, Deck } from "@prisma/client";
import { CreateDeck } from "../model/deck";

export async function createDeck(data: Deck): Promise<Deck> {
    const prisma = new PrismaClient();

    const deck = await prisma.deck.create({
        data: {
            userId: data.userId,
            name: data.name,
            colors: data.colors,
        }
    });

    return deck
}