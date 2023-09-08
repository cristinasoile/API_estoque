import {Router, Request, Response} from "express"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"
import { FindUserController } from "../controllers/user/FindUserController"
import { isAuthenticated } from "../middlewares/isAuthenticated"
import { RemoveUserController } from "../controllers/user/RemoveUserControllet"

const router = Router()

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const findUserController = new FindUserController();
const removeUserController = new RemoveUserController();

//User Routes
router.post("/users", createUserController.createUser)
router.post("/login", authUserController.authUser)
router.get("/users/:id", isAuthenticated, findUserController.findUser)
router.delete("/users/:id", removeUserController.removeUser)


export {router}
