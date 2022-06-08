import { Router } from "express";
import { postOrder } from "./postInstallmentPayment";
import { getProducts } from "./getProducts";

export const ShopRouter = Router();

ShopRouter.post("/order", postOrder);
ShopRouter.get("/products", postOrder);
