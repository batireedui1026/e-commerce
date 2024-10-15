import { Request, Response } from "express";
import Category from "../models/category.model";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      message: "New category is created successfully",
      data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(200).json({
      message: "New category is created successfully",
      category,
    });
  } catch (error) {
    console.log("error", error);
  }
};
