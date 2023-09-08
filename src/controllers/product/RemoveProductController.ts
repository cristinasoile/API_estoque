import { RemoveProductService } from '../../services/product/RemoveProductService';
import { Request, Response } from "express";

class RemoveProductController {

  async deleteProduct(req: Request, res: Response) {

    const { id } = req.params;
    const removeProductService = new RemoveProductService();

    await removeProductService.deleteProduct({id})

   return  res.json({ message: `Product has been deleted id:${id}`})

  }

}


export {RemoveProductController}
