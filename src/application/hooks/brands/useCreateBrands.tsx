import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useBrandStore from '../../storage/brandStore';
import { BrandService } from '../../services/brand/brand.service';

export const useCreateBrands = () => {
  const setShowModal = useBrandStore((state) => state.setShowModal);
  const { register, handleSubmit } = useForm<{ name: string }>({
    defaultValues: { name: "" },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: BrandService.createBrand,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
      setShowModal(false);
    },
    onError: console.log,
  });

  const onSubmit = (data: { name: string }) => {
    mutate(data.name);
  };

  return{
    register,
    handleSubmit,
    onSubmit,
    setShowModal
  };
};
