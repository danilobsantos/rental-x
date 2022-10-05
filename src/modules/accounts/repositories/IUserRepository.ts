import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    // criando a função de validação
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
