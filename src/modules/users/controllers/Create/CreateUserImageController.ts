import { Request, Response } from "express";
import { getUsers } from "../../repositories/ListUsersRepository";
import { updateUser } from "../../repositories/UpdateUserRepository";

export async function createUserImageController(req: Request, res: Response) {
    const data = req.file;
    const { id } = req.query;

    console.log('image -> ', data, id);
    const users = await getUsers();

    const userAlreadyExists = users.find(user => user.id === id);

    if (userAlreadyExists && data?.filename) {
        const updatedUser = await updateUser({
            profileImage: data.filename,
        }, userAlreadyExists.id);

        return res.status(200).send(updatedUser);
    }

    return res.status(400).json({ message: "User does not exists" });
}

