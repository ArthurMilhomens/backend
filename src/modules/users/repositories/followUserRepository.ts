import { PrismaClient } from "@prisma/client";
import { UpdateUser, User } from "../model/user";

const prisma = new PrismaClient();

export async function followUser(followingId: string, userId: string): Promise<void> {

    await prisma.follows.create({
        data: {
            followedById: userId,
            followingId: followingId
        }
    })

    return
}