import { Card } from "@prisma/client";
import { Request, Response } from "express";
import { Token } from "../../../utils/jwt";
import { findCardsByName } from "../../cards/repositories/FindCardsByName";
import { CreateDeck, RequestCards } from "../model/deck";
import { createDeck } from "../repositories/CreateDeckRepository";

const jwt = new Token();

export async function createDeckController(req: Request, res: Response) {
    const accessToken = req.headers['authorization'];
    
    const verify: any = await jwt.verifyAccessToken(accessToken);

    const cardsToSearch = req.body.cards.map((card: RequestCards) => card.name);

    const cards = await findCardsByName(cardsToSearch);

    const filteredCards = cards.map((card: Card) => {
        return { id: card.id }
    });

    const data: CreateDeck = {
        ...req.body,
        cards: filteredCards,
        userId: verify.payload.id,
    };

    const deck = await createDeck(data);

    return res.status(201).send(deck);
}