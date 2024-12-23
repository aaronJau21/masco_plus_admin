import { IBrand } from "../brand/brands-response.interface";

export interface IGetProductsResponse {
  products: IProduct[];
}

export interface IProduct {
  Brand: IBrand;
  brand_id: string;
  description: null;
  descuento: number;
  id: string;
  name: string;
  price: string;
  quantity_sold: number;
  status: boolean;
  stock: number;
}
