import { api } from "../../../api/api";
import { IAuthResponse, ILoginRequest } from "../../../domain";

export class AuthService {
  public static async login(request: ILoginRequest): Promise<IAuthResponse> {
    const { data } = await api.post<IAuthResponse>("/auth/login", request);

    return data;
  }
}
