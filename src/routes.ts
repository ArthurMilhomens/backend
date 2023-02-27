import { Router } from "express";

import { usersRoutes } from "./modules/users/users.routes";
import { decksRoutes } from "./modules/decks/decks.routes";
import { cardsRoutes } from "./modules/cards/cards.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/decks", decksRoutes);
router.use("/cards", cardsRoutes);

export { router }