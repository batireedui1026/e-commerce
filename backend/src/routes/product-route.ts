// import { Router } from "express";
// import { getAllProduct } from "../controllers/product-controller";

// const router = Router();

// router.route("/").get(getAllProduct);
// // router.route("/").post(createProduct);
// export default router;


import { Router } from "express";
import {
  getAllProduct,
  getProduct,
  isNew,
} from "../controllers/product-controller";

const router = Router();
// /api/v1/products
router.route("/").get(getAllProduct)
router.route("/:productId").get(getProduct) 
router.route("/isnew").get(isNew)

export default router;