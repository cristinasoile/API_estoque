import { IAuthRequest } from '../../Interfaces/user/auth/IAuthRequest';
import { Request, Response } from "express";
import { AuthUSerService } from "../../services/user/AuthUserService";

class AuthUserController {
  async authUser(req: Request, res: Response) {

    const { email, password }: IAuthRequest = req.body;
    const authUserService = new AuthUSerService();

    const auth = await authUserService.execute({ email, password });
    return res.json(auth)
}

}

export { AuthUserController };
