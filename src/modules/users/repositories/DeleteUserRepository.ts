import { PrismaClient } from "@prisma/client";

export async function deleteUser(userId: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.user.delete({
        where: { id: userId },
    });

    return
}