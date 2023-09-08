
import { ItemRequest } from "../../Interfaces/item/ItemRequest";
import prismaClient from "../../prisma";

class ItemProductService {

  async updateItem({ product_id, amount }: ItemRequest) {

    if (!product_id || !amount) {
      throw new Error ("product_id / amount not send" )
    }
    const queryProduct = await prismaClient.product.findFirst({
      where: {
        id: product_id,
      },
    });
    // 'queryProduct?.amount' significa que o amount pode ser nulo
    if (queryProduct?.amount > amount && amount > 0) {
      const newAmount = (queryProduct?.amount - amount);
      const updateProduct = await prismaClient.product.update({
        where: {
          id: product_id,
        },
        data: {
          amount: newAmount,
        },
        select: {
          id: true,
          name: true,
          amount: true,
        }
      });
      return updateProduct;
    } else {
      throw new Error ("amount not available" )
    }
  }
}

export { ItemProductService };
