import { IFindProductRequest } from './../../Interfaces/product/IFindProductRequest';
import prismaClient from "../../prisma";

class RemoveProductService {

  async deleteProduct({ id }: IFindProductRequest) {

    if (!id) {
      throw new Error ("product id not send" )
    }

    const delProduct = await prismaClient.product.delete({
      where: {
        id,
      }
    })

    return delProduct;
  }

}


export {RemoveProductService}
