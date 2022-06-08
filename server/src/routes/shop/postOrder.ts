import { Request, Response } from "express";
import { ResponseBuilder } from "../../util";
import { ShopController } from "../../controllers";

export const postOrder = async (req: Request, res: Response) => {
  try {
    const { tabName, productIds } = req.body as {
      tabName: string;
      productIds: number[];
    };
    const newTab = await ShopController.dao.createTab(tabName);
    if (!newTab) return ResponseBuilder.internalServerError(res);
    await Promise.all(
      productIds.map(async (prodId) =>
        ShopController.dao.addProduct(prodId, newTab)
      )
    );

    return ResponseBuilder.ok(res);
  } catch (error) {
    return ResponseBuilder.internalServerError(res);
  }
};
