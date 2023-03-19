import { Request, Response } from "express";
import { findCardsByName } from "../repositories/FindCardsByName";

export async function findCardsByNameController(req: Request, res: Response) {

    const cards = await findCardsByName(req.body.cards);

    return res.status(200).send({ data: cards });
}