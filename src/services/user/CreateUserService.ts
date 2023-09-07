import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../Interfaces/user/UserRequest";

class CreateUserService {

  async createUser({ name, email, password }: UserRequest) {
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
      data: {
        name: name,
        email: email,
        password : passwordHash
      },
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
