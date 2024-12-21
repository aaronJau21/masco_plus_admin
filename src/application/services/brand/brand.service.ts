import { api } from "../../../api/api";
import { IBrandsResponse } from "../../../domain";
import { ICreateBrandResponse } from "../../../domain/interfaces/brand/create-brand-response.interface";
import useAuthStore from "../../storage/authStorage";

export class BrandService {
  public static async getBrands(): Promise<IBrandsResponse> {
    const token = useAuthStore.getState().token;
    const { data } = await api.get<IBrandsResponse>("/brand", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  public static async createBrand(name: string): Promise<ICreateBrandResponse> {
    const token = useAuthStore.getState().token;
    const { data } = await api.post<ICreateBrandResponse>(
      "/brand",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  }

  public static async deleteBrand(id: string): Promise<{ msg: string }> {
    const token = useAuthStore.getState().token;
    const { data } = await api.delete<{ msg: string }>(`/brand/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
}
