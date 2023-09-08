import { IRemoveCategoryRequest } from '../../Interfaces/category/IRemoveCategoryRequest';
import prismaClient from "../../prisma";

class RemoveCategoryService {

  async removeCategory({ id }: IRemoveCategoryRequest) {
    if (id) {
      const category = await prismaClient.category.delete({
        where: {
          id: id
        },
        select: {
          id: true,
          name: true,
        }
      })
      return category;
    }

  }

}

export { RemoveCategoryService };

