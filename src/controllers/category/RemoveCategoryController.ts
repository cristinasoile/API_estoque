import { Request, Response } from "express";
import { RemoveCategoryService } from '../../services/category/RemoveCategoryService';

class RemoveCategoryController {

  async removeCategory(req: Request, res: Response) {

    const { id } = req.params

    const removeCategoryService = new RemoveCategoryService();

     await removeCategoryService.removeCategory({ id })

    return res.json({message: `Category deleted successfully id: ${id}`})
  }

}


export { RemoveCategoryController };
