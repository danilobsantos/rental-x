// importar funçao de encryptação
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        username,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        // verificando se usuário já existe
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        // vamos criptografar a senha antes de passar para o banco
        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            username,
            email,
            // passar o passwordHash que é a senha criptografada.
            password: passwordHash,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
