import { Deck } from "@prisma/client";
import { Request, Response } from "express";
import { Token } from "../../../utils/jwt";
import { CreateDeck } from "../model/deck";
import { createDeck } from "../repositories/CreateDeckRepository";

const jwt = new Token();

export async function createDeckController(req: Request, res: Response) {
    const accessToken = req.headers['authorization'];
    
    const verify: any = await jwt.verifyAccessToken(accessToken);

    const data: Deck = {
        ...req.body,
        userId: verify.payload.id,
    };

    const deck = await createDeck(data);

    return res.status(201).send(deck);
}