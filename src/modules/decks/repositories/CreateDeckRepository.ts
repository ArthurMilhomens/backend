import { PrismaClient, Deck } from "@prisma/client";
import { CreateDeck } from "../model/deck";

const prisma = new PrismaClient();

export async function createDeck(data: CreateDeck): Promise<Deck> {

    const deck = await prisma.deck.create({
        data: {
            userId: data.userId,
            name: data.name,
            colors: data.colors,
            cards: {
                create: data.cards
            }
        }
    });

    return deck
}