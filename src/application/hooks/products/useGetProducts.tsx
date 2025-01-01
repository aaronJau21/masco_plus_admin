import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../../services/product/product.service";

export const useGetProducts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: ProductService.getProducts,
    queryKey: ["products"],
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
