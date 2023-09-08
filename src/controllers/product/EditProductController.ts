import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";

class EditProductController {

  async updateProduct(req: Request, res: Response) {
    const {name,
      price,
      description,
      banner,
      amount, } = req.body;

    const { id } = req.params;

    const editProductService = new EditProductService();

    const updateProduct = await editProductService.updateProduct({id,
      name,
      price,
      description,
      banner,
      amount}
    )
    return res.json(updateProduct)
  }


}

export {EditProductController}
