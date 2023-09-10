import { Request, Response } from "express";
import { IUserRequest } from "../Interfaces/user/IUserRequest";
import CreateUserService2 from "../services/createUserService2";

export default class CreateUserControllertest {
  private service: CreateUserService2;

  // Preciso passar o service para o controller
  constructor(service: CreateUserService2) {
    this.service = service;
  }


  async createUserController(req: Request, res: Response) {
    const { name, email, password }: IUserRequest = req.body;
    console.log(req.body);

    const user = await this.service.createUserService({ name, email, password });
    return res.status(201).json(user);
  }

 }
