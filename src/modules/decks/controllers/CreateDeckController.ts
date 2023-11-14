import { Card } from "@prisma/client";
import { Request, Response } from "express";
import { Token } from "../../../utils/jwt";
import { findCardsByName } from "../../cards/repositories/FindCardsByName";
import { CardsOnDeck, CreateDeck, RequestCards } from "../model/deck";
import { createDeck } from "../repositories/CreateDeckRepository";

const jwt = new Token();

export async function createDeckController(req: Request, res: Response) {
    const accessToken = req.headers['authorization'];
    const verify: any = await jwt.verifyAccessToken(accessToken);
    
    let colors: string[] = [];

    const cardsToSearch = req.body.cards.map((card: RequestCards) => card.name);

    const cards = await findCardsByName(cardsToSearch);

    const filteredCards: CardsOnDeck[] = cards.map((card: Card) => {
        const quantity = req.body.cards.find((findedCard: RequestCards) => findedCard.name.toLowerCase() === card.name.toLowerCase())?.qtd

        let incolor = card.mana_cost.includes('{C}');
        incolor && colors.push("C");

        card.colors.map((color: string) => !colors.includes(color) && colors.push(color));

        return { cardId: card.id, qtd: quantity }
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