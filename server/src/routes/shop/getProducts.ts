import { Request, Response } from "express";
import { ResponseBuilder } from "../../util";
import { ShopController } from "../../controllers";

export const getProducts = async (req: Request, res: Response) => {
  const products = await ShopController.dao.getProductFilter();
  return ResponseBuilder.ok(res, { products });
};
