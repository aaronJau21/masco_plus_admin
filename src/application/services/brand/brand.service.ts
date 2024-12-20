import { api } from "../../../api/api";
import { IBrandsResponse } from "../../interfaces/brand/brands-response.interface";
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
}
