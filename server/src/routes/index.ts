import { Router } from "express";
import { ShopRouter } from "./shop";

export const BaseRouter = Router();

BaseRouter.use("/shop", ShopRouter);
