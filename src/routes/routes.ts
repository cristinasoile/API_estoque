import multer from 'multer';
import uploadConfig from '../config/multer';
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
import { CreateProductController } from '../controllers/product/CreateProductController';
import { EditProductController } from '../controllers/product/EditProductController';
import { FindProductController } from '../controllers/product/FindProductController';
import { GetProductController } from '../controllers/product/GetProductController';
import { RemoveProductController } from '../controllers/product/RemoveProductController';
import { ItemController } from '../controllers/item/ItemController';
import CreateUserControllertest from '../controllers/CreateUserControllertest';
import CreateUserService2 from '../services/createUserService2';


const router = Router()

const upload = multer(uploadConfig.upload("./tmp/uploads"))

router.get("/test", (req: Request, res: Response) => {
  return res.json({message: "Hello World"})
})

const userService = new CreateUserService2();
// User Controllers

// Preciso passar o service para o controller
const createUserControllertest = new CreateUserControllertest(userService);

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const findUserController = new FindUserController();
const removeUserController = new RemoveUserController();

//User Routes
// router.post("/users", createUserControllertest.createUserController)
router.post("/users", (req: Request, res: Response) => createUserControllertest.createUserController(req, res))

// router.post("/users", createUserController.createUser)
router.post("/login", authUserController.authUser)
router.get("/users/:id", isAuthenticated, findUserController.findUser)
router.delete("/users/:id", removeUserController.removeUser)

//Category Controllers
const createCategoryController = new CreateCategoryController();
const editCategoryController = new EditCategoryController();
const getCategoryController = new GetCategoryController();
const removeCategoryController = new RemoveCategoryController();

//Category Routes
router.post("/categories", isAuthenticated, createCategoryController.createCategory)
router.put("/categories/:id", isAuthenticated, editCategoryController.updateCategory)
router.get("/categories", isAuthenticated, getCategoryController.getCategoory)
router. delete("/categories/:id", isAuthenticated, removeCategoryController.removeCategory)

//Product Controllers
const createProductController = new CreateProductController();
const editProductController = new EditProductController();
const findProductController = new FindProductController();
const getProductController = new GetProductController();
const removeProductController = new RemoveProductController();

//Product Routes
// 'upload.single('file')' configuração para upload da imagem
router.post("/product", isAuthenticated, upload.single('file'), createProductController.createproduct);
router.put("/product/:id", isAuthenticated, upload.single('file'), editProductController.updateProduct);
router.get("/product/:id", isAuthenticated, findProductController.findproduct);
router.get("/product", isAuthenticated, getProductController.getProduct);
router.delete("/product/:id", isAuthenticated, removeProductController.deleteProduct)

//Item Controllers
const itemController = new ItemController();

//Item Routes
router.put("/item/:product_id", isAuthenticated, itemController.updateItem);


export {router}
