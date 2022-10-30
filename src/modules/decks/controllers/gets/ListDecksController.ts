import { getDecks } from "../../repositories/ListDecksRepository";
import { Request, Response } from "express";

export async function listDecks(req: Request, res: Response) {
    const decks = await getDecks();

    return res.status(200).json(decks)
}