import { IFindUser } from './../../Interfaces/user/IFindUser';
import prismaClient from "../../prisma";


class FindUserService {

  async findUser({ id }: IFindUser) {

    if (!id) {
      throw new Error("Id incorrect");
    }

    const user = await prismaClient.user.findUnique({
      where: {
        id: id
      },
      // o select seleciona o que eu quero que retorne
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return user;

  }

}

export { FindUserService };
