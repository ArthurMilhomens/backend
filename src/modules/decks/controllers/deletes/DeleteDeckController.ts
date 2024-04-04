import { Request, Response } from "express";
import { deleteDeck } from "../../repositories/deletes/DeleteDeckRepository";
import { getDecks } from "../../repositories/gets/ListDecksRepository";

export async function deleteDeckController(req: Request, res: Response) {
    const { id } = req.query;
    const decks = await getDecks();

    const deckAlreadyExists = decks.find(deck => deck.id === id)

    if (deckAlreadyExists) {
        await deleteDeck(deckAlreadyExists.id)
        return res.status(200).json({ message: "Deck deleted" })
    }

    return res.status(404).json({ message: "Deck not found" })
}