import { Router } from 'express';
import { findCardsByNameController } from './controllers/FindCardsByNameController';
import { updateCardsListController } from './controllers/UpdateCardsListController';

const cardsRoutes = Router();

cardsRoutes.get("/update-list", (request, response) => {
    return updateCardsListController(request, response);
});

cardsRoutes.get("/list/details", (request, response) => {
    return findCardsByNameController(request, response);
});

export { cardsRoutes }