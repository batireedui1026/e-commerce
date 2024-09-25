import { Request, Response } from "express";
import Category from "../models/category.model";
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const getCategory = await Category.find({ name });
  } catch (error) {}
};
