import useAuthStore from "../../../application/storage/authStorage";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { useGetBrands } from "../../../application/hooks/brands/useGetBrands";
import { FaPen } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import useBrandStore from "../../../application/storage/brandStore";
import { ModelCreateBrand } from "./components/ModelCreateBrand";

export const Brands = () => {
  const clearAuth = useAuthStore((store) => store.clearAuth);
  const naviagete = useNavigate();
  const showModal = useBrandStore((state) => state.showModal);
  const setShowModal = useBrandStore((state) => state.setShowModal);

  const { data, isLoading, isError } = useGetBrands();

  if (isError) {
    toast.error("Token expirado");
    setTimeout(() => {
      clearAuth();
      naviagete("/login");
    }, 3000);
  }

  if (isLoading)
    return (
      <>
        <div>Loading...</div>
        <ToastContainer />
      </>
    );

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
        <table className="text-left w-full">
          <thead className="bg-black flex text-white w-full">
            <tr className="flex w-full mb-4">
              <th className="p-4 w-1/3">ID</th>
              <th className="p-4 w-1/3">name</th>
              <th className="p-4 w-1/3">Actions</th>
            </tr>
          </thead>
          <tbody
            className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
            style={{ height: "70vh" }}
          >
            {data.brands.map((item, index) => (
              <tr key={item.id} className="flex w-full mb-4">
                <td className="p-7 w-1/3">{index + 1}</td>
                <td className="p-7 w-1/3">{item.name}</td>
                <td className="p-7 w-1/3 flex gap-x-7 text-2xl">
                  <FaPen className="cursor-pointer" />
                  <CiTrash className="cursor-pointer" />
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
