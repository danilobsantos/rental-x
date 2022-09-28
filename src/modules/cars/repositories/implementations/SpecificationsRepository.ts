import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRespository implements ISpecificationsRepository {
    // private specifications: Specification[]; --remove
    private repository: Repository<Specification>;

    constructor() {
        // this.specifications = []; --remove
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        // const specification = new Specification(); --remove

        // Object.assign(specification, {
        //     name,
        //     description,
        //     created_ad: new Date(),
        // });
        // this.specifications.push(specification); --remove
        const specification = this.repository.create({
            name,
            description,
        });
        await this.repository.save(specification);
    }
    async findByName(name: string): Promise<Specification> {
        // const specification = this.specifications.find(
        //     (specification) => specification.name === name
        const specification = this.repository.findOne({
            name,
        });
        return specification;
    }
}

export { SpecificationsRespository };
