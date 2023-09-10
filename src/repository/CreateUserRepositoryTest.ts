import prismaClient from "../prisma";
import { IUserRequest } from "../Interfaces/user/IUserRequest";
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";


export default class CreateUserRepositoryTest{

  private prisma = prismaClient;
  // private prisma: PrismaClient;

  // constructor() {
  //   this.prisma = new PrismaClient();
  // }

  async createUserRepository({ name, email, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    console.log(`name >>>${name}`);
    console.log(`email >>>${email}`);

    console.log(`password >>>${password}`);


    const userAlreadyExists = await this.prisma.user.findFirst({
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
    const user = this.prisma.user.create({
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
