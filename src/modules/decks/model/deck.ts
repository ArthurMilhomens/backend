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
    cards: Cards[];
    userId: string;
}

export interface Cards {
    id: string;
}

export interface RequestCards {
    name: string;
    qtd: string;
}