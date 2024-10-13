// import { Request, Response } from "express";
// import Product from "../models/product.model";
// import { insertProducts } from "../models/product.model";

// export const getAllProduct = async (req: Request, res: Response) => {
//   try {
//     const { name, price, images } = req.body;
//     const product = await Product.find({ name, price, images });
//     console.log("name", name);
//     console.log("price", price);
//     console.log("images", images);
//     res.status(200).json({ message: "successfull" });
//   } catch (error) {
//     res.status(400).json({ message: "failed" });
//   }
// };

// const createProduct = async (req: Request, res: Response) => {
//   try {
//   } catch (error) {}
// };
import { Request, Response } from "express";
import Product from "../models/product.model";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId).populate("category");
    res.status(200).json({ message: "success to get one product", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get one product" });
  }
};
// export const searchProduct = async(req: Request, res: Response) => {
//   const { name, price, description, size, images } = req.query;
//   try {
//     const product = await Product.find({ name }).toLowercase()
    
//   } catch (error) {
//     console.log(error);
    
//   }


// }



export const searchProduct = async (req: Request, res: Response) => {
  const { name, price, description, size, images } = req.query;
  try {
    const searchCriteria: any = {};

    if (name) {
      searchCriteria.name = { $regex: name, $options: "i" }; 
    }

    if (price) {
      searchCriteria.price = price;
    }

    if (description) {
      searchCriteria.description = { $regex: description, $options: "i" }; 
    }

    if (size) {
      searchCriteria.size = size;
    }

    if (images) {
      searchCriteria.images = images;
    }
    const products = await Product.find(searchCriteria);

    res.status(200).json(products); 
  } catch (error) {
    console.error( error);
    res.status(500).json({ message: "Error searching for products", error });
  }
};
