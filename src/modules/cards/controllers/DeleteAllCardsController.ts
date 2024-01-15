import { Request, Response } from "express";
import { deleteAllCards } from "../repositories/DeleteAllCardsRepository";

export async function deleteAllCardsController(req: Request, res: Response) {

    await deleteAllCards();

    return res.status(200).send({ message: "Cartas deletadas com sucesso!" });
}