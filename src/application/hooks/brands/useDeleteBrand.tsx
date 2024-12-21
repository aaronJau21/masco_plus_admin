import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BrandService } from "../../services/brand/brand.service";
import { toast } from "react-toastify";

export const useDeleteBrand = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: BrandService.deleteBrand,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
      toast.success(data.msg);
    },
    onError: () => {
      toast.error("Error al eliminar la marca");
    },
  });

  const onDeleteBrand = (id: string) => mutation.mutate(id);

  return {
    onDeleteBrand,
  };
};
