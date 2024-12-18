import { api } from "../../../api/api";
import { IBrandsResponse } from "../../interfaces/brand/brands-response.interface";

export class BrandService {
  public static async getBrands(): Promise<IBrandsResponse> {
    const { data } = await api.get<IBrandsResponse>("/brand");

    return data;
  }
}
