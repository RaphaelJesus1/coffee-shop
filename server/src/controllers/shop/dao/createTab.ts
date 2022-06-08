import { DAO } from "../../../util/dao";

const createTab = async (name: string): Promise<number | null> => {
  try {
    const res: any = await DAO.query(
      `
      INSERT INTO coffee_shop.tab
      (name)
      VALUES
      (:name);
      `,
      { name }
    );

    return res[0].insertedId || null;
  } catch (err: unknown) {
    return null;
  }
};

export { createTab };
