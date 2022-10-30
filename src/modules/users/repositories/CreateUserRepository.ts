import { PrismaClient } from "@prisma/client";
import { CreateUser, User } from "../model/user";

export async function createUser(data: CreateUser): Promise<User> {
    const prisma = new PrismaClient();

    const user = await prisma.user.create({
        data,
    })

    return user
}