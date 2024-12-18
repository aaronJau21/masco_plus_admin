import { useQuery } from "@tanstack/react-query";
import { BrandService } from "../../../application/services/brand/brand.service";
import useAuthStore from "../../../application/storage/authStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const Brands = () => {
  const clearAuth = useAuthStore((store) => store.clearAuth);
  const naviagete = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["brands"],
    queryFn: BrandService.getBrands,
  });

  console.log(isError);

  if (isError) {
    clearAuth();
    toast.error("Token expirado");
    setTimeout(() => {
      naviagete("/login");
    }, 2000);
  }

  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>Brands</div>;
};
