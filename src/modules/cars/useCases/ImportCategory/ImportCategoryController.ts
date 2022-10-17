import { Request, Response } from "express";
// importar container
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    // constructor(private importCategoryUseCase: ImportCategoryUseCase) {} -- remove
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        // adicionar
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        // remover this
        await importCategoryUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };
