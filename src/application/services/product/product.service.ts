import { api } from "../../../api/api";
import {
  IGetProductsResponse,
  IProduct,
  IProductCreateRequest,
  IProductCreateResponse,
  IUpdateStatusProduct,
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

  public static async updateStatusProduct(
    id: string,
    status: boolean
  ): Promise<IUpdateStatusProduct> {
    const token = useAuthStore.getState().token;
    const { data } = await api.patch(
      `/product/status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  }

  public static async findProduct(id: string): Promise<{ product: IProduct }> {
    const token = useAuthStore.getState().token;
    const { data } = await api.get(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
}
