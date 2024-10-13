import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });

    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({
        message: "created new cart",
        cart,
      });
    }

    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
    } else {
      findUserCart.products.push({ product: productId, quantity });
    }

    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to read carts",
    });
  }
};
export const getCard = async (req: Request, res: Response) => {
  try {
    const getAllCard = await Cart.find({}).populate("products.product");
    res.status(200).json({ message: "Бүх кард харах", AllCard: getAllCard });
  } catch (error) {
    console.log("Buh cardiig harahad aldaa garlaa", error);
    res.status(400).json({ message: "Buh cardiig harahd aldaa garlaa" });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  const { userId, cardOneProductId } = req.body;

  try {
    const findUserCard = await Cart.findOne({ user: userId });

    if (!findUserCard) {
      console.log("Энэ хэрэглэгчид сагсалсан бараа байхгүй байна");
      return res
        .status(200)
        .json({ message: "Энэ хэрэглэгчид сагсалсан бараа байхгүй байна" });
    }

    const findIndex = findUserCard.products.findIndex((item) => {
      console.log("req body====> findIndex", item.product.toString());
      return item.product.toString() === cardOneProductId;
    });

    console.log(
      "req body====>userId, cardOneProductId",
      userId,
      cardOneProductId
    );

    console.log("req body====>findUserCard", findUserCard);

    console.log(
      "frontoos ирсэн бүтээгдэхүүн хэрэглэгсийн сагсан дотор байгаа юу хэддэх индэкс дотр байна вэ",
      findIndex
    );
    if (findIndex === -1) {
      console.log("Уг бараа сагсанд байхгүй байна ");
      return res
        .status(200)
        .json({ message: "Уг бараа сагсанд байхгүй байна " });
    } else {
      findUserCard.products.splice(findIndex, 1);
    }

    const updatedCard = await findUserCard.save();

    res
      .status(200)
      .json({ message: "Success deleted card ", updatedCard: updatedCard });
  } catch (error) {
    console.log("Cart ustgahad aldaa garlaa", error);
    res.status(400).json({ message: "Cart ustgahad aldaa garlaa" });
  }
};



export const updateData = async (req: Request, res: Request) => {
  const { product, quantity } = req.body;
  const updatedCard = await Cart.updateOne({ quantity: quantity });
};