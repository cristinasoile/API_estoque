import { IRemoveUser } from './../../Interfaces/user/IRemoveUser';
import prismaClient from "../../prisma";

class RemoveUserService {

  async removeUser({ id }: IRemoveUser) {

    if (id) {
      const user = await prismaClient.user.delete({
        where: {
          id: id
        }
      });

      return user;
    }



  }

}

export { RemoveUserService };
