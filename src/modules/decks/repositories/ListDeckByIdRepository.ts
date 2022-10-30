import { PrismaClient } from "@prisma/client";
import { Deck } from "../model/deck";

export async function getDeckById(id: string): Promise<Deck> {
    const prisma = new PrismaClient();

    const deck = await prisma.deck.findUniqueOrThrow({
        where: { id }
    });

    return deck
}