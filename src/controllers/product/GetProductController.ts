import { GetProductService } from '../../services/product/GetProductService';
import { Request, Response } from "express";

class GetProductController {

  async getProduct(req: Request, res: Response) {

    const getProductService = new GetProductService();
    const getAllProducts = await getProductService.getProduct();

    return res.json(getAllProducts)

  }

}


export {GetProductController}
