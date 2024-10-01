import { Request, Response } from "express";
import Product from "../models/product.model";


const getAllProduct = async(req: Request, res: Response) =>{
    try{
        const {name} = req.body;
        const product = Product.findOne({name});
        res.status(200).json({message: "successfull"});
    
    }catch(error){
        res.status(400).json({message: "failed"});

    }
}

const createProduct = async(req: Request, res: Response) => {
    try{

    }catch(error){

    }
}