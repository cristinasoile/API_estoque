import { ICategoryRequest } from '../../Interfaces/category/ICategoryRequest';
import { Request, Response } from "express";
import {CreateCategoryService} from "../../services/category/CreateCategoryService";

class CreateCategoryController {

  async createCategory(req: Request, res: Response) {

    const { name }: ICategoryRequest = req.body;
    const createCategoryService = new CreateCategoryService();

    const newCategory = await createCategoryService.createCategory({ name });

    return res.json(newCategory )
  }

};

export { CreateCategoryController };
