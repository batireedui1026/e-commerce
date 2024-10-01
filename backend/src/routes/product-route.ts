import { Router } from "express";
import {getAllProduct, createProduct} from "../controllers/product-controller"

const router = Router();

router.route("/").get(getAllProduct);
router.route("/").post(createProduct);
export default router;