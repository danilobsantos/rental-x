import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    // constructor(private listCategoriesUseCase: ListCategoriesUseCase) {} --remove
    async handle(request: Request, response: Response): Promise<Response> {
        // inserir
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

        const all = await listCategoriesUseCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };
