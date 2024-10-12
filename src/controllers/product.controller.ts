import ProductService from "../models/Product.service";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import express, { Request, Response } from "express";

const productService = new ProductService;

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts")
        res.render("products")
    } catch(err) {
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }
        
}

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct")
    } catch(err) {
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }
        
}

productController.updateChoosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChoosenProduct")
    } catch(err) {
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }
        
}

export default productController;