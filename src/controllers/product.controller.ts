import { Request, Response } from "express";
import { createProductType, updateProductType } from "@/schemas/product.schema";

export const createProduct = (
  req: Request<unknown, unknown, createProductType>,
  res: Response
) => {
  console.log("🥳 Creating product: ", req.body.name);
  res.send("creating product...");
};

export const updateProduct = (req: Request<unknown, unknown, updateProductType>, res: Response) => {
  console.log("🥳 Updating product with name: ", req.body.name);
  res.send("updating product...");
};
