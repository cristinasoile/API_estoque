import { IUserRequest } from '../../Interfaces/user/IUserRequest';
import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {

  async createUser(req: Request, res: Response) {

    const { name, email, password }: IUserRequest = req.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.createUser({ name, email, password });
    return res.json(user)
  }

}

export { CreateUserController };
