import { Request, Response } from "express";
import { UpdateUser } from "../model/user";
import { getUsers } from "../repositories/List/ListUsersRepository";
import { updateUser } from "../repositories/UpdateUserRepository";

export async function updateUserController(req: Request, res: Response) {
    const data: UpdateUser = req.body;
    const { id } = req.query;
    const users = await getUsers();

    const userAlreadyExists = users.find(user => user.id === id)

    if (userAlreadyExists) {
        const updatedUser = await updateUser(data, userAlreadyExists.id)

        return res.status(200).json(updatedUser)
    }

    return res.status(404).json({ message: "User not found" })
}

