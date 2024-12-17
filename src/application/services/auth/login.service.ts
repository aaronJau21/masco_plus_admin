import { api } from "../../../api/api";
import { ILoginRequest } from "../../interfaces/login-request.interface";
import { IAuthResponse } from "../../interfaces/login-response.interface";

export class AuthService {
  public static async login(request: ILoginRequest): Promise<IAuthResponse> {
    const { data } = await api.post<IAuthResponse>("/auth/login", request);

    return data;
  }
}
