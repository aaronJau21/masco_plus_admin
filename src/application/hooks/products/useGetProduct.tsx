import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ProductService } from "../../services/product/product.service";

export const useGetProduct = () => {
  const [id, setid] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => ProductService.findProduct(id!),
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    setid,
  };
};
