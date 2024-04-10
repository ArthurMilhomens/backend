import { Request, Response } from "express";
import { getUsers } from "../repositories/List/ListUsersRepository";
import { Token } from "../../../utils/jwt";
import { unfollowUser } from "../repositories/unfollowUserRepository";

const jwt = new Token();

export async function unfollowUserController(req: Request, res: Response) {
    const accessToken = req.headers['authorization'];
    const verify: any = await jwt.verifyAccessToken(accessToken);

    const { id } = req.query;
    const users = await getUsers({});

    const userExists = users.find(user => user.id === id)

    if (userExists && verify) {
        const formatedId = id?.toString() ?? "";
        const updatedUser = await unfollowUser(formatedId, verify.payload.id);

        return res.status(200).json(updatedUser)
    }

    return res.status(404).json({ message: "User not found" })
}

