import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import verifyTokenMiddlewares from "../middlewares/verifyTokenMiddlewares.js";
import { checkSchema } from "express-validator";
import { addProductSchema } from "../schema/productSchema.js";

export const productRoutes = Router();

productRoutes.get("/get-all", getAllProduct);
productRoutes.get("/get-by-id/:id", getProductById);
productRoutes.post(
  "/add-product",
  checkSchema(addProductSchema),
  verifyTokenMiddlewares,
  addProduct
);
productRoutes.put(
  "/update/:id",
  checkSchema(addProductSchema),
  verifyTokenMiddlewares,
  updateProduct
);
productRoutes.delete("/delete/:id", verifyTokenMiddlewares, deleteProduct);
