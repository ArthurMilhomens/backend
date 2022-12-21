import { Request, Response } from "express";
import { LoginUser } from "../model/user";
import { authenticate } from "../repositories/Authentication";

export async function loginController(req: Request, res: Response) {
    const data: LoginUser = req.body;

    const user = await authenticate(data);

    return res.status(200).json(user)
}

