import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        username,
        email,
        driver_license,
        password,
        id,
        avatar,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
            id,
            avatar,
        });
        await this.repository.save(user);
    }
    // implementando a função de find
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
    // implementando findById
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository };
