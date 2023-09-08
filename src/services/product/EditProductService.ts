import { IEditProductRequest } from './../../Interfaces/product/IEditProductRequest';
import prismaClient from "../../prisma";

class EditProductService {

  async updateProduct({id,
    name,
    price,
    description,
    banner,
    amount }: IEditProductRequest) {

    const editProduct = await prismaClient.product.update({

      where: {
        id: id
      },
      data: {
        name,
        price,
        description,
        banner,
        amount: +amount
      },
    })

    return editProduct;
    }


 }

export {EditProductService}
