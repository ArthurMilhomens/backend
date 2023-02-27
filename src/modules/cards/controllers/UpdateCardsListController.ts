import { Request, Response } from "express";
import CardListData from "../../../../cards.json";
import { createCardList } from "../repositories/CreateCardListRepository";
// import { Token } from "../../../utils/jwt";

// const jwt = new Token();

export async function updateCardsListController(req: Request, res: Response) {
    // const accessToken = req.headers['authorization'];
    
    // const verify: any = await jwt.verifyAccessToken(accessToken);
    
    const data: any = CardListData

    function getLegalities(options: any) {
        const attr = Object.keys(options);
        const filterLegalities = attr.filter(format => options[format] !== 'not_legal');

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
            image_status: card.image_status ?? '',
            mana_cost: card.mana_cost ?? '',
            cmc: card.cmc,
            type_line: card.type_line,
            oracle_text: card.oracle_text ?? '',
            power: card.power ?? '',
            toughness: card.toughness ?? '',
            colors: card.colors,
            set_id: card.set_id,
            set: card.set,
            set_name: card.set_name,
            set_type: card.set_type,
            set_uri: card.set_uri,
            set_search_uri: card.set_search_uri,
            rulings_uri: card.rulings_uri ?? '',
            rarity: card.rarity,
            flavor_text: card.flavor_text ?? '',
            card_back_id: card.card_back_id ?? '',
            image_uris: card.image_uris?.normal ?? '',
            legalities: getLegalities(card.legalities),
            prices: card.prices?.usd ?? ''
        }
    });

    console.log('Começou!')

    await createCardList(formatedData);

    return res.status(200).send({ message: "Success!" });
}