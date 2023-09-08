import { FindProductService } from '../../services/product/FindProductService';
import { Request, Response } from "express";

class FindProductController {

  async findproduct(req: Request, res: Response) {
    const findProductService = new FindProductService();

    const { id } = req.params;

    const updateProduct = await findProductService.findProduct({ id });

    return res.json(updateProduct)

  }
 }

export {FindProductController}
