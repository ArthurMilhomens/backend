import { Router } from "express";

import { usersRoutes } from "./modules/users/users.routes";
import { decksRoutes } from "./modules/decks/decks.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/decks", decksRoutes);

export { router }