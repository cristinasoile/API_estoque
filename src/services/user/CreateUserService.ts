import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { IUserRequest } from "../../Interfaces/user/IUserRequest";

class CreateUserService {

  async createUser({ name, email, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    // encriptado a nossa senha do usuario, para que ela não fique visivel no banco de dados, e nem para o adm do banco de dados
    // hash(password, 8); primeiro parametro a senha e o tamanho da senha.
    const passwordHash = await hash(password, 8);

    //criando nosso usuario
    const user = prismaClient.user.create({
      // data é o que eu quero criar
      data: {
        name: name,
        email: email,
        password : passwordHash
      },
      // select é o que eu quero que retorne
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    return user;
  }

}

export { CreateUserService };
