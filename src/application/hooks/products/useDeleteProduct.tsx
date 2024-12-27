import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductService } from "../../services/product/product.service";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ProductService.deleteProduct,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onDeleteProduct = (id: string) => mutation.mutate(id);
  return {
    onDeleteProduct,
  };
};
