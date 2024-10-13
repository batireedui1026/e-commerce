import { Router } from "express";
import { createCart, getCard, deleteCard,   } from "../controllers/cart-controller";

const router = Router();

router.route("/").post(createCart);
router.route("/").post(getCard);
router.route("/").post(deleteCard)
export default router;



// import { Router } from "express";
// import {
//   createdCard,
//   deleteCard,
//   getCard,
// } from "../controllers/purchasecard-controller";

// const router = Router();
// router.post("/createdcard", createdCard);
// router.get("/", getCard);
// router.delete("/deletecart", deleteCard);
// export default router;