/*
  Warnings:

  - You are about to drop the `_CardToDeck` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "_CardToDeck";

-- CreateTable
CREATE TABLE "CardsOnDecks" (
    "deckId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "qtd" TEXT NOT NULL,

    CONSTRAINT "CardsOnDecks_pkey" PRIMARY KEY ("deckId","cardId")
);
