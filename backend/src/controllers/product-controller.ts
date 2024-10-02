import { Request, Response } from "express";
import Product from "../models/product.model";
import { insertProducts } from "../models/product.model";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, images } = req.body;
    const product = await Product.find({ name, price, images });
    console.log("name", name);
    console.log("price", price);
    console.log("images", images);
    res.status(200).json({ message: "successfull" });
  } catch (error) {
    res.status(400).json({ message: "failed" });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
