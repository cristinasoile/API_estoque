import {Router, Request, Response} from "express"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"

const router = Router()

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

//User Routes
router.post("/users", createUserController.createUser)
router.post("/session", authUserController.authUser)


export {router}
