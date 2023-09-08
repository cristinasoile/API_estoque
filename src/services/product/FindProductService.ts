import { IFindProductRequest } from './../../Interfaces/product/IFindProductRequest';
import prismaClient from "../../prisma";

class FindProductService {

  async findProduct({ id }: IFindProductRequest) {
    const searchProduct = prismaClient.product.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        amount: true,
      }
    })
    return searchProduct;
  }
}

export {FindProductService}
