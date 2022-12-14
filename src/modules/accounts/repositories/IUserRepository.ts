import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    // add função
    findById(id: string): Promise<User>;
}

export { IUsersRepository };
