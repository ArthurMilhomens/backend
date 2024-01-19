import { Router } from 'express';
import { findCardsByNameController } from './controllers/FindCardsByNameController';
import { updateCardsListController, updateSimpleCardsListController } from './controllers/UpdateCardsListController';
import { listAllCardsController } from './controllers/ListAllCardsController';
import { deleteAllCardsController } from './controllers/DeleteAllCardsController';

const cardsRoutes = Router();

cardsRoutes.get("/update-list", (request, response) => {
    return updateCardsListController(request, response);
});

cardsRoutes.get("/update-simple-list", (request, response) => {
    return updateSimpleCardsListController(request, response);
});

cardsRoutes.get("/list", (request, response) => {
    return listAllCardsController(request, response);
});

cardsRoutes.delete("/delete-all", (request, response) => {
    return deleteAllCardsController(request, response);
});

cardsRoutes.get("/list/details", (request, response) => {
    return findCardsByNameController(request, response);
});

export { cardsRoutes }