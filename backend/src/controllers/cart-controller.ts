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

export const getCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  try {
    const cart = await Cart.findOne({ user: id }).populate("products.product");
    // const cart = await Cart.findOne({}).populate("products.product");
    res.status(200).json({
      message: "get cart",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to get carts",
    });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { productId, newQuantity } = req.body;
  try {
    // 1. find user cart
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      return res.status(400).json({
        message: "not found user",
      });
    }

    // 2. find product
    const findProduct = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    cart.products[findProduct].quantity = newQuantity;

    const updatedCart = await cart.save();
    res.status(200).json({
      message: "updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to get carts",
    });
  }
};
