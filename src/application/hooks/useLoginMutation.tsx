import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth/login.service";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "../interfaces/auth/login-request.interface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAuthStore from "../storage/authStorage";

export const useLoginMutation = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const { register, handleSubmit } = useForm<ILoginRequest>({
    defaultValues: { email: "", password: "" },
  });

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (data: ILoginRequest) => AuthService.login(data),
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      navigate("/home");
    },
    onError: () => {
      toast.error("Error");
    },
  });
  const handleLogin = (data: ILoginRequest) => mutate(data);
  return { register, handleSubmit, handleLogin };
};
