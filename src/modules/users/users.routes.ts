import { Router } from 'express';
import { createUserController } from './controllers/CreateUserController';
import { deleteUserController } from './controllers/DeleteUserController';
import { listUsers } from './controllers/ListUsersController';
import { loginController } from './controllers/LoginController';
import { updateUserController } from './controllers/UpdateUserController';

const usersRoutes = Router();

usersRoutes.post("/login", (request, response) => {
    return loginController(request, response);
});

usersRoutes.post("/create", (request, response) => {
    return createUserController(request, response);
});

usersRoutes.get("/", (request, response) => {
    return listUsers(request, response);
})

usersRoutes.put("/update", (request, response) => {
    return updateUserController(request, response);
})

usersRoutes.delete("/delete", (request, response) => {
    return deleteUserController(request, response);
})

export { usersRoutes }