import { Request, Response } from "express";
import { CreateDeck } from "../model/deck";
import { createDeck } from "../repositories/CreateDeckRepository";

export async function createDeckController(req: Request, res: Response) {
    const data: CreateDeck = req.body;

    const deck = await createDeck(data)

    return res.status(201).json(deck)
}