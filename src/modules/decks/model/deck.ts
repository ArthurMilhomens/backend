import { Card } from "@prisma/client";

export interface Deck {
    id: string;
    name: string;
    colors: string[];
    cards: Card[];
    userId: string;
}

export interface CreateDeck {
    name: string;
    colors: string[];
    cards: CardsOnDeck[];
    userId: string;
}

export interface CardsOnDeck {
    cardId: string;
    qtd: string;
}

export interface RequestCards {
    name: string;
    qtd: string;
}