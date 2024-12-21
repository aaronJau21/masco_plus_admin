import { useCreateBrands } from "../../../../application/hooks/brands/useCreateBrands";

export const ModelCreateBrand = () => {
  const { register, handleSubmit, onSubmit, setShowModal } = useCreateBrands();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <p className="text-center text-2xl font-bold">Crea una marca</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <label className="block text-center" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-primary rounded-md focus:border-primary w-full"
              {...register("name")}
            />
          </div>

          <div className="flex gap-x-3 justify-center">
            <button type="submit" className="bg-blue-500 py-1 px-3 rounded-md">
              Agregar
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 py-1 px-3 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
