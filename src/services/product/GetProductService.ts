import { IProductRequest } from './../../Interfaces/product/IProductRequest';
import prismaClient from "../../prisma";

class GetProductService {

  async getProduct() {

    const searchAllProducts = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        amount: true,
      },
      orderBy: {
        created_at: "desc"
      }
    })

    return searchAllProducts;
    }

}


export {GetProductService}
