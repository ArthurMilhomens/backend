import { PrismaClient } from "@prisma/client";

export async function getDecks() {
    const prisma = new PrismaClient();

    const decks = await prisma.deck.findMany();

    return decks
}