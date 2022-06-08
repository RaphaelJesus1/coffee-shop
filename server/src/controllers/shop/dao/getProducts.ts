import { DAO } from "../../../util/dao";

interface ProductParams {
  productId?: number;
}
interface Product {
  productId: number;
  name: string;
  desc: string;
}

interface ParamFilter {
  [index: string]: string;
}

const FILTERS = {
  productId: "product_id = :productId",
} as ParamFilter;

const buildFilter = (params: ProductParams): string => {
  const filters = Object.keys(params).map((key) => FILTERS[key]);

  return filters.join(" AND ");
};

const parseProduct = (product: any): Product => {
  return {
    productId: product.product_id,
    name: product.name,
    desc: product.desc,
  };
};

const getProductFilter = async (
  params?: ProductParams
): Promise<Product | null> => {
  try {
    const filter = params ? buildFilter(params) : null;
    const res: any = await DAO.query(
      `
      SELECT * FROM coffee_shop.product 
      ${filter ? `WHERE ${filter}` : ""};
      `,
      params
    );

    if (!res[0][0]) {
      return null;
    }
    return res[0].map((prod: any) => parseProduct(prod));
  } catch (err: unknown) {
    return null;
  }
};

export { getProductFilter };
