import { Router } from "express";

import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";

const usersRouters = Router();

const createUserController = new CreateUserController();

usersRouters.post("/", createUserController.handle);

export { usersRouters };
