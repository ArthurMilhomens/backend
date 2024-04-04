import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserDetails(id: string){

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
                    cards: {
                        select: {
                            card: true,
                            qtd: true,
                        }
                    },
                    colors: true,
                }
            },
        }
    });

    return users
}