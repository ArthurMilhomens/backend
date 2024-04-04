import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteUser(userId: string): Promise<void> {

    await prisma.user.delete({
        where: { id: userId },
    });

    return
}