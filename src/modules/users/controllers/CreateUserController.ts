import { Request, Response } from "express";
import { CreateUser } from "../model/user";
import { createUser } from "../repositories/CreateUserRepository";
import { getUsers } from "../repositories/ListUsersRepository";

export async function createUserController(req: Request, res: Response) {
    const data: CreateUser = req.body;
    const file = req.file?.filename.split('.')[0]
    // const users = await getUsers();

    console.log('controller -> ', data);
    console.log('file -> ', file);

    // const userAlreadyExists = users.find(user => user.email === data.email)

    // if (userAlreadyExists) {
    //     return res.status(400).json({ message: "User already exists" })
    // }

    // const user = await createUser({
    //     ...data,
    //     profileImage: file
    // })

    // return res.status(201).json(user)
    return res.status(200)
}

