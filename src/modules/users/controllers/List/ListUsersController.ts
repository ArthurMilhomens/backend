import { getUsers } from "../../repositories/List/ListUsersRepository";
import { Request, Response } from "express";

export async function listUsers(req: Request, res: Response) {
    const filters = req.query
    const users = await getUsers(filters);

    return res.status(200).json(users)
}