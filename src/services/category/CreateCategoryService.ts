import prismaClient from "../../prisma";
import { ICategoryRequest } from '../../Interfaces/category/ICategoryRequest';

class CreateCategoryService {

  async createCategory({ name }: ICategoryRequest) {

    if (name === ''|| name === undefined || name === null) {
      throw new Error("Name incorrect");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      }
    })

    return category;
  }

}

export { CreateCategoryService };
