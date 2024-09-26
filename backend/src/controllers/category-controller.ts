import { Request, Response } from "express";
import Category from "../models/category.model";
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const getCategory = await Category.find({ name });
    const (getCategory.length === 0){
      res.status(400).json({message: "not found all category"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed"})
  }
};
