import { Loader } from "../../shared";
import { CiPen, CiTrash } from "react-icons/ci";
import { useGetProducts } from "../../../application/hooks/products/useGetProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductService } from "../../../application/services/product/product.service";

export const Products = () => {
  const { data, isLoading } = useGetProducts();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ProductService.deleteProduct,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onDeleteProduct = (id: string) => mutation.mutate(id);

  if (isLoading) return <Loader />;
  if (data?.products)
    return (
      <>
        <div className="flex justify-end my-5">
          <button className="bg-blue-500 py-1 px-3 rounded-md text-xl text-white hover:bg-blue-600">
            Crear
          </button>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primary text-center h-16">
              <th className="text-xl font-bold">ID</th>
              <th className="text-xl font-bold">Nombre</th>
              <th className="text-xl font-bold">Marca</th>
              <th className="text-xl font-bold">Pricio</th>
              <th className="text-xl font-bold">Status</th>
              <th className="text-xl font-bold">Actiones</th>
            </tr>
          </thead>
          <tbody className="bg-white border border-gray-500">
            {data?.products.map((product) => (
              <tr
                key={product.id}
                className="text-center h-16 border-b border-gray-500"
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.Brand.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className={`${
                      product.status === false
                        ? "bg-red-600 text-white"
                        : "bg-primary"
                    } px-3 py-1 rounded font-bold hover:px-5 hover:py-3 transition-all`}
                  >
                    {product.status === false ? "Desactivado" : "Activo"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="text-red-500 text-xl mr-3 hover:text-2xl transition-all"
                  >
                    <CiTrash />
                  </button>
                  <button className="text-yellow-700 text-xl hover:text-2xl transition-all">
                    <CiPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
};
