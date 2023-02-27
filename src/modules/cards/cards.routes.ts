import { Router } from 'express';
import { updateCardsListController } from './controllers/UpdateCardsListController';

const cardsRoutes = Router();

cardsRoutes.get("/update-list", (request, response) => {
    return updateCardsListController(request, response);
});

export { cardsRoutes }