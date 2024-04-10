import { PrismaClient } from "@prisma/client";
import { UpdateUser, User } from "../model/user";

const prisma = new PrismaClient();

export async function unfollowUser(followingId: string, userId: string): Promise<void> {

    const follow = await prisma.follows.findFirst({
        where: { followedById: userId, followingId: followingId },
    })

    await prisma.follows.delete({
        where: { id: follow?.id }
    })

    return
}