import {Router, Request, Response} from "express"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"
import { FindUserController } from "../controllers/user/FindUserController"
import { isAuthenticated } from "../middlewares/isAuthenticated"
import { RemoveUserController } from "../controllers/user/RemoveUserControllet"
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"
import { EditCategoryController } from "../controllers/category/EditCategoryController"
import { GetCategoryController } from "../controllers/category/GetCategoryController"
import { RemoveCategoryController } from "../controllers/category/RemoveCategoryController"

const router = Router()

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

// User Controllers
const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const findUserController = new FindUserController();
const removeUserController = new RemoveUserController();

//User Routes
router.post("/users", createUserController.createUser)
router.post("/login", authUserController.authUser)
router.get("/users/:id", isAuthenticated, findUserController.findUser)
router.delete("/users/:id", removeUserController.removeUser)

// Category Controllers
const createCategoryController = new CreateCategoryController();
const editCategoryController = new EditCategoryController();
const getCategoryController = new GetCategoryController();
const removeCategoryController = new RemoveCategoryController();

//Category Routes
router.post("/categories", isAuthenticated, createCategoryController.createCategory)
router.put("/categories/:id", isAuthenticated, editCategoryController.updateCategory)
router.get("/categories", isAuthenticated, getCategoryController.getCategoory)
router. delete("/categories/:id", isAuthenticated, removeCategoryController.removeCategory)

export {router}
