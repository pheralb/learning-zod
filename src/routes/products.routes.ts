import { Router } from "express";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import { createProduct, updateProduct } from "@/controllers/product.controller";
import { createProductSchema, updateProductSchema } from "@/schemas/product.schema";

const router = Router();

router.post("/products", validateSchema(createProductSchema), createProduct);
router.put("/products/:id", validateSchema(updateProductSchema), updateProduct);

export default router;
