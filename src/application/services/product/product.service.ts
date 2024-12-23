import { api } from "../../../api/api";
import {
  IGetProductsResponse,
  IProductCreateRequest,
  IProductCreateResponse,
} from "../../../domain";
import useAuthStore from "../../storage/authStorage";

export class ProductService {
  public static async getProducts(): Promise<IGetProductsResponse> {
    const token = useAuthStore.getState().token;
    const { data } = await api.get("/product", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  public static async createProcut(
    request: IProductCreateRequest
  ): Promise<IProductCreateResponse> {
    const token = useAuthStore.getState().token;
    const { data } = await api.post("/product", request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public static async deleteProduct(
    id: string
  ): Promise<IProductCreateResponse> {
    const token = useAuthStore.getState().token;
    const { data } = await api.delete(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
}
