import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {

  async removeUser(req: Request, res: Response) {
    const { id } = req.params ;

    const removeUserService = new RemoveUserService();

    const deleteUser = await removeUserService.removeUser({ id })

    return res.json(deleteUser)
  }
}

export { RemoveUserController };
