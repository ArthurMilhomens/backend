import { PrismaClient } from "@prisma/client";

export async function getUserDetails(id: string){
    const prisma = new PrismaClient();

    const users = await prisma.user.findUniqueOrThrow({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
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