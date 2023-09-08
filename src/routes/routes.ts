import {Router, Request, Response} from "express"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"
import { FindUserController } from "../controllers/user/FindUserController"
import { isAuthenticated } from "../middlewares/isAuthenticated"

const router = Router()

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const findUserController = new FindUserController();

//User Routes
router.post("/users", createUserController.createUser)
router.post("/login", authUserController.authUser)
router.get("/users/:id", isAuthenticated ,findUserController.findUser )


export {router}
