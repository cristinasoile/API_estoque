import { ItemRequest } from '../../Interfaces/item/ItemRequest';
import { Request, Response } from "express";
import { ItemProductService } from "../../services/item/ItemProductService";

class ItemController {
  async updateItem(req: Request, res: Response) {
    const { amount } = req.body;
    const { product_id } = req.params;


    const itemProductService = new ItemProductService();

    const item = await itemProductService.updateItem({ product_id, amount});

    return res.json(item);
   }

 }

export { ItemController };
