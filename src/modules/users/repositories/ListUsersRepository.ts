import { PrismaClient } from "@prisma/client";

export async function getUsers() {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            decks: {
                select: {
                    id: true,
                    name: true,
                    cards: true,
                    colors: true
                }
            },
        }
    });

    return users
}