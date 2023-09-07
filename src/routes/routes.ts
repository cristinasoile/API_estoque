import {Router, Request, Response} from "express"
import { CreateUserController } from "../controllers/user/CreateUserController"

const createUserController = new CreateUserController();


const router = Router()

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

//User Routes

router.post("/users", createUserController.handle)

export {router}
