import { Request, Response } from "express";
import { getDeckById } from "../repositories/gets/ListDeckByIdRepository";
import { updateDeck } from "../repositories/UpdateDeckRepository";
import { Token } from "../../../utils/jwt";
import { CardsOnDeck, CreateDeck, RequestCards } from "../model/deck";
import { findCardsByName } from "../../cards/repositories/FindCardsByName";
import { Card } from "@prisma/client";

const jwt = new Token();

export async function updateDeckController(req: Request, res: Response) {
//   const accessToken = req.headers["authorization"];
//   const verify: any = await jwt.verifyAccessToken(accessToken);
//   await jwt.verifyAccessToken(accessToken);
  const { id } = req.query;

  if (typeof id === "string") {
    let colors: string[] = [];

    const cardsToSearch = req.body.cards.map((card: RequestCards) => card.name);

    const cards = await findCardsByName(cardsToSearch);

    const filteredCards: CardsOnDeck[] = cards.map((card: Card) => {
      const quantity = req.body.cards.find(
        (findedCard: RequestCards) =>
          findedCard.name.toLowerCase() === card.name.toLowerCase()
      )?.qtd;

      let incolor = card.mana_cost.includes("{C}");
      incolor && colors.push("C");

      card.colors.map(
        (color: string) => !colors.includes(color) && colors.push(color)
      );

      return { cardId: card.id, qtd: quantity };
    });

    const data: CreateDeck = {
      ...req.body,
      colors,
      cards: filteredCards,
    };

    // const deck = await getDeckById(id);

    const updatedDeck = await updateDeck(id, data);

    return res.status(200).json(updatedDeck);
  }
}
