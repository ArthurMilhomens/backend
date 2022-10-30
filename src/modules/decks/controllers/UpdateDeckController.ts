import { Request, Response } from "express";
import { getDeckById } from "../repositories/ListDeckByIdRepository";
import { updateDeck } from "../repositories/UpdateDeckRepository";

export async function updateDeckController(req: Request, res: Response) {
    const data = req.body;
    const { id } = req.query;

    if (typeof id === "string") {
        const deck = await getDeckById(id);

        const updatedDeck = deck && await updateDeck(id, data)

        return res.status(200).json(updatedDeck)
    }
}