import { Request, Response } from "express";
import { getDeckById } from "../../repositories/gets/ListDeckByIdRepository";

export async function getDeckByIdController(req: Request, res: Response) {
    const { id } = req.params;

    const deck = await getDeckById(id);

    return res.status(200).json(deck)
}