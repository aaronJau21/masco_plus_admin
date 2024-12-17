import { ToastContainer } from "react-toastify";
import { useLoginMutation } from "../../../application/hooks/useLoginMutation";

export const Login = () => {
  const { handleLogin, handleSubmit, register } = useLoginMutation();

  return (
    <div className="bg-slate-400 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-3xl text-center font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="mb-6 text-primary">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-[#87CEEB] text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-primary text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
