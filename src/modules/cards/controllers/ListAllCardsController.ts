import { Request, Response } from "express";
import { findAllCards } from "../repositories/FindAllCardsRepository";

export async function listAllCardsController(req: Request, res: Response) {

    const cards = await findAllCards();

    return res.status(200).send({ data: cards });
}