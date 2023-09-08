import { ICategoryRequest } from '../../Interfaces/category/ICategoryRequest';
import { Request, Response } from "express";
import { GetCategoryService } from '../../services/category/GetCategoryService';

class GetCategoryController {
  async getCategoory(req: Request, res: Response) {

    const getCategoryService = new GetCategoryService();

    const categories = await getCategoryService.getCategory();

    return res.json(categories);
  }
}


export { GetCategoryController };
