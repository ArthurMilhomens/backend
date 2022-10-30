export interface Deck {
    id: string;
    name: string;
    colors: string[];
    cards: string[];
    userId: string;
}

export interface CreateDeck {
    name: string;
    colors: string[];
    cards: string[];
    userId: string;
}