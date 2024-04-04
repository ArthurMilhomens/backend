import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDecks() {

    const decks = await prisma.deck.findMany({
        include: { 
            cards: {
                include: {
                    card: true
                }
            }
        }
    });

    return decks
}