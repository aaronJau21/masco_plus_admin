import useAuthStore from "../../../application/storage/authStorage";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { useGetBrands } from "../../../application/hooks/brands/useGetBrands";
import { CiTrash } from "react-icons/ci";
import useBrandStore from "../../../application/storage/brandStore";
import { ModelCreateBrand } from "./components/ModelCreateBrand";
import { useDeleteBrand } from "../../../application/hooks/brands/useDeleteBrand";
import { Loader } from "../../shared";

export const Brands = () => {
  const clearAuth = useAuthStore((store) => store.clearAuth);
  const naviagete = useNavigate();
  const showModal = useBrandStore((state) => state.showModal);
  const setShowModal = useBrandStore((state) => state.setShowModal);

  const { data, isLoading, isError, error } = useGetBrands();

  const { onDeleteBrand } = useDeleteBrand();

  console.log(error);

  if (isError) {
    clearAuth();
    naviagete("/login");
    console.log(error);
  }

  if (isLoading) return <Loader />;

  if (data?.brands)
    return (
      <>
        <div className="flex justify-end my-5">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 py-1 px-3 rounded-md text-xl text-white hover:bg-blue-600"
          >
            Crear
          </button>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primary text-center h-16">
              <th className="text-xl font-bold">ID</th>
              <th className="text-xl font-bold">Nombre</th>
              <th className="text-xl font-bold">Actiones</th>
            </tr>
          </thead>
          <tbody className="bg-white border border-gray-500">
            {data?.brands.map((brand) => (
              <tr
                key={brand.id}
                className="text-center h-16 border-b border-gray-500"
              >
                <td>{brand.id}</td>
                <td>{brand.name}</td>
                <td>
                  <button
                    className="text-red-500 text-xl"
                    onClick={() => onDeleteBrand(brand.id)}
                  >
                    <CiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && <ModelCreateBrand />}
        <ToastContainer />
      </>
    );
};
