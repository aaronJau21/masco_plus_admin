import { useQuery } from "@tanstack/react-query";
import { BrandService } from "../../services/brand/brand.service";

export const useGetBrands = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["brands"],
    queryFn: BrandService.getBrands,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
