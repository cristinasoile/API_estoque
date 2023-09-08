import { IEditcategoryRequest } from './../../Interfaces/category/IEditCategoryRequest';
import prismaClient from "../../prisma";

class EditCartegory {

  async updateCategory({ name, id }: IEditcategoryRequest) {
    if (name === ''|| id === '' || !name || !id ) {
      throw new Error("Invalid arguments to edit category");
    }

    const editCategory = await prismaClient.category.update({
      where: {
        id: id
      },
      // Data é o que eu quero atualizar
      data: {
        name: name
      }
    });

    return editCategory;

  }
 }

export { EditCartegory };
