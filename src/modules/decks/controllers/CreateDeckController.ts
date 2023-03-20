import { Card } from "@prisma/client";
import { Request, Response } from "express";
import { Token } from "../../../utils/jwt";
import { findCardsByName } from "../../cards/repositories/FindCardsByName";
import { CreateDeck, RequestCards } from "../model/deck";
import { createDeck } from "../repositories/CreateDeckRepository";

const jwt = new Token();

export async function createDeckController(req: Request, res: Response) {
    const accessToken = req.headers['authorization'];
    let colors: string[] = [];
    
    const verify: any = await jwt.verifyAccessToken(accessToken);

    const cardsToSearch = req.body.cards.map((card: RequestCards) => card.name);

    const cards = await findCardsByName(cardsToSearch);

    const filteredCards = cards.map((card: Card) => {
        card.colors.map(color => !colors.includes(color) && colors.push(color));

        return { 
            cardId: card.id,
            qtd: req.body.cards.find((c: RequestCards) => c.name.toLocaleLowerCase() === card.name.toLocaleLowerCase()).qtd
        }
    });

    const data: CreateDeck = {
        ...req.body,
        colors,
        cards: filteredCards,
        userId: verify.payload.id
    };

    const deck = await createDeck(data);

    return res.status(201).send(deck);
}