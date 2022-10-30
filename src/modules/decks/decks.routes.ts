import { Router } from 'express';
import { createDeckController } from './controllers/CreateDeckController';
import { deleteDeckController } from './controllers/DeleteDeckController';
import { getDeckByIdController } from './controllers/gets/GetDeckByIdController';
import { listDecks } from './controllers/gets/ListDecksController';
import { updateDeckController } from './controllers/UpdateDeckController';

const decksRoutes = Router();

decksRoutes.post("/create", (request, response) => {
    return createDeckController(request, response);
});

decksRoutes.get("/", (request, response) => {
    return listDecks(request, response);
})

decksRoutes.get("/:id", (request, response) => {
    return getDeckByIdController(request, response);
})

decksRoutes.put("/update", (request, response) => {
    return updateDeckController(request, response);
})

decksRoutes.delete("/delete", (request, response) => {
    return deleteDeckController(request, response);
})

export { decksRoutes }