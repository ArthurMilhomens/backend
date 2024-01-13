import { Router } from 'express';
import { createDeckController } from './controllers/CreateDeckController';
import { deleteDeckController } from './controllers/DeleteDeckController';
import { getDeckByIdController } from './controllers/gets/GetDeckByIdController';
import { listDecks } from './controllers/gets/ListDecksController';
import { updateDeckController } from './controllers/UpdateDeckController';
import { deleteAllDecksController } from './controllers/DeleteAllDecksController';
import { getDeckByUserIdController } from './controllers/gets/GetDeckByUserIdController';

const decksRoutes = Router();

decksRoutes.post("/create", (request, response) => {
    return createDeckController(request, response);
});

decksRoutes.get("/", (request, response) => {
    return listDecks(request, response);
})

decksRoutes.get("/detail/:id", (request, response) => {
    return getDeckByIdController(request, response);
})

decksRoutes.get("/user", (request, response) => {
    return getDeckByUserIdController(request, response);
})

decksRoutes.put("/update", (request, response) => {
    return updateDeckController(request, response);
})

decksRoutes.delete("/delete", (request, response) => {
    return deleteDeckController(request, response);
})

decksRoutes.delete("/delete-all", (request, response) => {
    return deleteAllDecksController(request, response);
})

export { decksRoutes }