import { useForm } from "react-hook-form";
import useProductStore from "../../storage/productStore";
import { useGetBrands } from "../brands/useGetBrands";
import { IProductCreateRequest } from "../../../domain";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductService } from "../../services/product/product.service";

export const useCreateProduct = () => {
  const setShowModal = useProductStore((state) => state.setShowModal);
  const { data } = useGetBrands();
  const { register, handleSubmit } = useForm<IProductCreateRequest>({
    defaultValues: {
      name: "",
      brand_id: "",
      status: false,
      quantity_sold: 0,
    },
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ProductService.createProcut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setShowModal(false);
    },
    onError: console.log,
  });

  const onSubmit = (data: IProductCreateRequest) => {
    mutate(data);
  };
  return {
    data,
    register,
    handleSubmit,
    onSubmit,
    setShowModal,
  };
};
