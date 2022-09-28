import { Request, Response } from "express";
// 1 importar container
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        // 2 inserir
        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase
        );
        // 3 remover this.
        await createSpecificationUseCase.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateSpecificationController };
