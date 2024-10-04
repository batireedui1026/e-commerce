import { Request, Response } from "express";
import Category from "../models/category.model";

export const getAllCategory = (req: Request, res: Response) => {
  Category.create(req.body);
  res.status(200).json({
    message: "All category is read successfully",
  });
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
