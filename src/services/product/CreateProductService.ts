import { IProductRequest } from './../../Interfaces/product/IProductRequest';
import prismaClient from "../../prisma";

class CreateProductService {

  async createProduct({ category_id, name, price, description, banner, amount }: IProductRequest) {
    const product = await prismaClient.product.create({
      // Data é o que eu quero criar
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        // + transforma em number
        amount: +amount,
        category_id: category_id,
      }
    })
    return product
  }
}


export { CreateProductService };
