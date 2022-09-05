import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        // const createCategoryService = new CreateCategoryUseCase(
        //     categoriesRepository
        // );
        // acrescenta this. e altera a o nome da variável

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
