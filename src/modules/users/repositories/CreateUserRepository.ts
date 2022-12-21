import { PrismaClient } from "@prisma/client";
import { CreateUser, User } from "../model/user";
import bcrypt from 'bcryptjs';
import { Token } from '../../../utils/jwt';

const jwt = new Token();

export async function createUser(data: CreateUser): Promise<User> {
    const prisma = new PrismaClient();

    data.password = bcrypt.hashSync(data.password, 8);

    const user = await prisma.user.create({
        data,
    });

    const userWithAcessToken = {
        ...user,
        acessToken: await jwt.signAccessToken(user)
    };

    return userWithAcessToken
}