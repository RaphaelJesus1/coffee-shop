import { DAO } from "../../../util/dao";

const addProduct = async (
  productId: number,
  tabId: number
): Promise<number | null> => {
  try {
    const res: any = await DAO.query(
      `
      INSERT INTO coffee_shop.product_tab
      (product_id, tab_id)
      VALUES
      (:productId, :tabId);
      `,
      { productId, tabId }
    );

    return res[0].insertedId || null;
  } catch (err: unknown) {
    return null;
  }
};

export { addProduct };
