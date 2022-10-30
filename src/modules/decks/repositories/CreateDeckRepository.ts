import { PrismaClient } from "@prisma/client";
import { CreateDeck, Deck } from "../model/deck";

export async function createDeck(data: CreateDeck): Promise<Deck> {
    const prisma = new PrismaClient();

    const deck = await prisma.deck.create({
        data: {
            name: data.name,
            cards: data.cards,
            colors: data.colors,
            User: {
                connect: {
                    id: data.userId
                }
            }
        }
    });

    return deck
}