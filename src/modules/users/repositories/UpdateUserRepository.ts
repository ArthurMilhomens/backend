import { PrismaClient } from "@prisma/client";
import { UpdateUser, User } from "../model/user";

export async function updateUser(data: UpdateUser, userId: string): Promise<User> {
    const prisma = new PrismaClient();

    const user = await prisma.user.update({
        where: { id: userId },
        data: data,
        select: {
            id: true,
            name: true,
            email: true,
            profileImage: true,
        }
    });

    return user
}