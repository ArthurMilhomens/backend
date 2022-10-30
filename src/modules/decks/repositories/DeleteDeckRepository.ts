import { PrismaClient } from "@prisma/client";

export async function deleteDeck(id: string) {
    const prisma = new PrismaClient();

    await prisma.deck.delete({
        where: { id }
    });

    return
}