import { UserRequest } from './../../Interfaces/user/UserRequest';
import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {

  async handle(req: Request, res: Response) {

    const { name, email, password }: UserRequest = req.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.createUser({ name, email, password });
    return res.json(user)
  }

}

export { CreateUserController };
