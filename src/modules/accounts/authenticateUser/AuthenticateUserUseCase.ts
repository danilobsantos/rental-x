import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // verificar se o usuário existe
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email or password incorrect!!");
        }

        // verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password incorrect!!");
        }

        // criar token
        const token = sign({}, "28da3dc8be8fe719663c9332f5b11cee", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
