import { Router } from "express";
import { postOrder } from "./postOrder";
import { getProducts } from "./getProducts";
import { getTab } from "./getTab";

export const ShopRouter = Router();

ShopRouter.post("/order", postOrder);
ShopRouter.get("/products", getProducts);
ShopRouter.get("/tab", getTab);
