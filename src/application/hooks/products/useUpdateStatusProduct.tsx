import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductService } from "../../services/product/product.service";

export const useUpdateStatusProduct = () => {
  const queryClient = useQueryClient();

  const mutationStatus = useMutation({
    mutationFn: ({ id, status }: { id: string; status: boolean }) =>
      ProductService.updateStatusProduct(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
        exact: false,
      });
    },
    onError: console.log,
  });

  return mutationStatus;
};
