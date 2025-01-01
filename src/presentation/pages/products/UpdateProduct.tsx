import { useParams } from "react-router";
import { Loader } from "../../shared";
import { useGetProduct } from "../../../application/hooks/products/useGetProduct";
import { useEffect } from "react";

export const UpdateProduct = () => {
  const { id } = useParams();

  const getProduct = useGetProduct();

  useEffect(() => {
    getProduct.setid(id!);
  }, [id, getProduct]);

  console.log(getProduct.data);

  if (getProduct.isLoading) return <Loader />;

  if (getProduct.data)
    return (
      <>
        <h2 className="text-center text-3xl font-bold">
          {getProduct.data.product.name}
        </h2>
        <div className="flex h-[41vh]">
          <div className="flex-1 flex justify-center items-center h-full">
            <form className="bg-white shadow-2xl w-[59%] h-[95%] p-5">
              <div className="mb-3">
                <label
                  className="block font-bold text-lg mb-1"
                  htmlFor="nombre"
                >
                  Nombre:
                </label>
                <input
                  id="nombre"
                  className="w-full border-2 border-secundary rounded-md focus:outline-none focus:border-primary placeholder:pl-2 h-10"
                  placeholder="Name"
                />
              </div>

              <div className="w-full relative mt-4">
                <label className="block font-bold text-lg mb-1" htmlFor="stock">
                  Precio:
                </label>
                <div className="relative">
                  <button
                    className="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-slate-200 rounded hover:bg-secundary"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-secundary rounded-md transition duration-300 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md"
                    placeholder="55"
                  />
                  <button
                    className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-200  rounded hover:bg-primary"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-full relative mt-4">
                <label className="block font-bold text-lg mb-1" htmlFor="stock">
                  Stock:
                </label>
                <div className="relative">
                  <button
                    className="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-slate-200 rounded hover:bg-secundary"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-secundary rounded-md transition duration-300 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md"
                    placeholder="55"
                  />
                  <button
                    className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-200  rounded hover:bg-primary"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              
            </form>
          </div>
          <div className="flex-1">2</div>
        </div>

        <div></div>
      </>
    );
};
