import { CreateProductService } from '../../services/product/CreateProductService';
import { Request, Response } from "express";

class CreateProductController {

  async createproduct(req: Request, res: Response) {
    const {category_id,
      name,
      price,
      description,
      banner,
      amount } = req.body

    const createProductService = new CreateProductService();
    // verificar se foi feito o upload da imagem
    if (!req.file) {
      throw new Error('Error sending image');

    } else {
      // 'filename: banner' virá com o nome de banner
      const { originalname, filename: banner } = req.file;
      const product = await createProductService.createProduct({
        name, price, banner, amount, category_id, description
      });

      return res.json(product)

    }

  }

}


export { CreateProductController };
