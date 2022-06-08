import { DAO } from "../../../util/dao";

interface TabParams {
  name?: string;
}
interface Tab {
  tabId: number;
  productName: string;
  productPrice: number;
}

interface ParamFilter {
  [index: string]: string;
}

const FILTERS = {
  name: "tab.name = :name",
} as ParamFilter;

const buildFilter = (params: TabParams): string => {
  const filters = Object.keys(params).map((key) => FILTERS[key]);

  return filters.join(" AND ");
};

const parseTab = (tab: any): Tab => {
  return {
    tabId: tab.id,
    productName: tab.product_name,
    productPrice: Number(tab.product_price),
  };
};

const getTab = async (params: TabParams): Promise<Tab | null> => {
  try {
    const filter = params ? buildFilter(params) : null;
    const res: any = await DAO.query(
      `
      SELECT tab.tab_id, prod.name as product_name, prod.price as product_price FROM coffee_shop.tab
      JOIN  coffee_shop.product_tab p_tab ON p_tab.tab_id = tab.tab_id
      JOIN  coffee_shop.product prod ON prod.product_id = p_tab.product_id
      WHERE ${filter};
      `,
      params
    );

    if (!res[0][0]) {
      return null;
    }
    return res[0].map((tab: any) => parseTab(tab));
  } catch (err: unknown) {
    return null;
  }
};

export { getTab };
