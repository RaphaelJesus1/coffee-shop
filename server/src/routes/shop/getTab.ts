import { Request, Response } from "express";
import { ResponseBuilder } from "../../util";
import { ShopController } from "../../controllers";

export const getTab = async (req: Request, res: Response) => {
  const { tabName } = req.query as { tabName: string };
  const tab = await ShopController.dao.getTab({ name: tabName });
  return ResponseBuilder.ok(res, { tab });
};
