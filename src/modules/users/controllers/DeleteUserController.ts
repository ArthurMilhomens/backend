import { Request, Response } from "express";
import { deleteUser } from "../repositories/DeleteUserRepository";
import { getUsers } from "../repositories/List/ListUsersRepository";
import { User } from "../model/user";

export async function deleteUserController(req: Request, res: Response) {
    const { id } = req.query;
    const users = await getUsers();

    const userAlreadyExists = users.find(user  => user.id === id)

    if (userAlreadyExists) {
        await deleteUser(userAlreadyExists.id)

        return res.status(200).json({ message: "User deleted" })
    }

    return res.status(404).json({ message: "User not found" })
}

