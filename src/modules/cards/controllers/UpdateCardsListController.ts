import { Request, Response } from "express";
import { createCardList } from "../repositories/CreateCardListRepository";

import { chain } from "stream-chain";

import { parser } from "stream-json";
import { streamArray } from "stream-json/streamers/StreamArray";

export async function updateCardsListController(req: Request, res: Response) {
  let cards: any[] = [];

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
      if (cards.length < 500) {
        cards.push(formatedValue);
      } else {
        cards.push(formatedValue);
        await createCardList(cards);
        cards = [];
      }
      return value && value.department === "accounting" ? data : null;
    },
  ]);

  let counter = 0;
  pipeline.on("data", () => {
    ++counter;
  });
  pipeline.on("end", () =>
    console.log(`${counter} registros.`)
  );

  function getLegalities(options: any) {
    const attr = Object.keys(options);
    const filterLegalities = attr.filter(
      (format) => options[format] !== "not_legal"
    );

    return filterLegalities;
  }

  return res.status(200).send({ message: "Success!" });
}
