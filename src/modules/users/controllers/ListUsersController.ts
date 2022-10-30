import { getUsers } from "../repositories/ListUsersRepository";
import { Request, Response } from "express";

export async function listUsers(req: Request, res: Response) {
    const users = await getUsers();

    return res.status(200).json(users)
}