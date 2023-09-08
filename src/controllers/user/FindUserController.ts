import { Request, Response } from "express";
import { FindUserService } from "../../services/user/FindUserService";

class FindUserController {

  async findUser(req: Request, res: Response) {

    const { id } = req.params

    const findUserservice = new FindUserService();

    const user = await findUserservice.findUser({ id });

    return res.json(user);
  }

}

export { FindUserController };

