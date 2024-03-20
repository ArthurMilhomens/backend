import { PrismaClient } from "@prisma/client";

export async function getUsersByName(name: string){
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
        where: { name: {
            contains: name
        }},
        select: {
            id: true,
            name: true,
            profileImage: true,
        }
    });

    return users
}