import { Request, Response } from "express";
import {
  createCardList,
  createCardListTest,
} from "../repositories/CreateCardListRepository";
import CardListData from "../../../../cards.json";

import { chain } from "stream-chain";

import { parser } from "stream-json";
import { streamArray } from "stream-json/streamers/StreamArray";

export async function updateCardsListController(req: Request, res: Response) {
  let cards: any[] = [];
  let insertArray: any[] = [];

  const fs = require("fs");

  const pipeline = chain([
    fs.createReadStream("all-cards.json"),
    parser(),
    streamArray(),
    async (data: any) => {
      const value = data.value;
      let formatedValue = {
        object: value.object,
        id: value.id,
        oracle_id: value.oracle_id ?? "",
        multiverse_ids: value.multiverse_ids,
        name: value.name,
        scryfall_uri: value.scryfall_uri,
        highres_image: value.highres_image,
        image_status: value.image_status ?? "",
        mana_cost: value.mana_cost ?? "",
        cmc: value.cmc ?? 0.0,
        type_line: value.type_line ?? "",
        oracle_text: value.oracle_text ?? "",
        power: value.power ?? "",
        toughness: value.toughness ?? "",
        colors: value.colors,
        set_id: value.set_id,
        set: value.set,
        set_name: value.set_name,
        set_type: value.set_type,
        set_uri: value.set_uri,
        set_search_uri: value.set_search_uri,
        rulings_uri: value.rulings_uri ?? "",
        rarity: value.rarity,
        flavor_text: value.flavor_text ?? "",
        card_back_id: value.card_back_id ?? "",
        image_uris: value.image_uris?.normal ?? "",
        legalities: getLegalities(value.legalities),
        prices: value.prices?.usd ?? "",
      };
      if (cards.length < 5000) {
        cards.push(formatedValue);
      } else {
        cards.push(formatedValue);
        insertArray.push(createCardList(cards));
        cards = [];
      }
      return value && value.department === "accounting" ? data : null;
    },
  ]);

  await createCardListTest(insertArray);

  function getLegalities(options: any) {
    const attr = Object.keys(options);
    const filterLegalities = attr.filter(
      (format) => options[format] !== "not_legal"
    );

    return filterLegalities;
  }

  pipeline.on("end", async () => {
    return res.status(200).send({ message: "Success!" });
  });
}

export async function updateSimpleCardsListController(
  req: Request,
  res: Response
) {
  const data: any = CardListData;

  function getLegalities(options: any) {
    const attr = Object.keys(options);
    const filterLegalities = attr.filter(
      (format) => options[format] !== "not_legal"
    );

    return filterLegalities;
  }

  const formatedData = data.map((card: any) => {
    return {
      object: card.object,
      id: card.id,
      oracle_id: card.oracle_id,
      multiverse_ids: card.multiverse_ids,
      name: card.name,
      scryfall_uri: card.scryfall_uri,
      highres_image: card.highres_image,
      image_status: card.image_status ?? "",
      mana_cost: card.mana_cost ?? "",
      cmc: card.cmc,
      type_line: card.type_line,
      oracle_text: card.oracle_text ?? "",
      power: card.power ?? "",
      toughness: card.toughness ?? "",
      colors: card.colors,
      set_id: card.set_id,
      set: card.set,
      set_name: card.set_name,
      set_type: card.set_type,
      set_uri: card.set_uri,
      set_search_uri: card.set_search_uri,
      rulings_uri: card.rulings_uri ?? "",
      rarity: card.rarity,
      flavor_text: card.flavor_text ?? "",
      card_back_id: card.card_back_id ?? "",
      image_uris: card.image_uris?.normal ?? "",
      legalities: getLegalities(card.legalities),
      prices: card.prices?.usd ?? "",
    };
  });

  console.log("Começou!");

  await createCardList(formatedData);

  return res.status(200).send({ message: "Success!" });
}
