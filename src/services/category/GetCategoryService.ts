import prismaClient from "../../prisma";
import { ICategoryRequest } from '../../Interfaces/category/ICategoryRequest';

class GetCategoryService {
  async getCategory() {

    // bucar todas as categorias
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      }
    });

    return category;

    }
  }


export { GetCategoryService };
