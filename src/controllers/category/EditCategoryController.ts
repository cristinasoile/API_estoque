import { Request, Response } from "express";
import { EditCartegory } from "../../services/category/EditCategoryService";

class EditCategoryController {

  async updateCategory(req: Request, res: Response) {

    const { name } = req.body;
    const { id } = req.params;

    const editCategory = new EditCartegory();

    const updateCategory = await editCategory.updateCategory({ name, id });

    return res.json(updateCategory);
  }

}

export { EditCategoryController };
