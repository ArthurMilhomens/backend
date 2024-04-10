-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deck" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "colors" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "object" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "oracle_id" TEXT NOT NULL,
    "multiverse_ids" INTEGER[],
    "name" TEXT NOT NULL,
    "scryfall_uri" TEXT NOT NULL,
    "highres_image" BOOLEAN NOT NULL,
    "image_status" TEXT NOT NULL,
    "image_uris" TEXT NOT NULL,
    "mana_cost" TEXT NOT NULL,
    "cmc" DOUBLE PRECISION NOT NULL,
    "type_line" TEXT NOT NULL,
    "oracle_text" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "toughness" TEXT NOT NULL,
    "colors" TEXT[],
    "legalities" TEXT[],
    "set_id" TEXT NOT NULL,
    "set" TEXT NOT NULL,
    "set_name" TEXT NOT NULL,
    "set_type" TEXT NOT NULL,
    "set_uri" TEXT NOT NULL,
    "set_search_uri" TEXT NOT NULL,
    "rulings_uri" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "flavor_text" TEXT NOT NULL,
    "card_back_id" TEXT NOT NULL,
    "prices" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardsOnDecks" (
    "deckId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "qtd" TEXT NOT NULL,

    CONSTRAINT "CardsOnDecks_pkey" PRIMARY KEY ("deckId","cardId")
);

-- CreateTable
CREATE TABLE "Follows" (
    "id" SERIAL NOT NULL,
    "followedById" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Follows_followedById_followingId_key" ON "Follows"("followedById", "followingId");
