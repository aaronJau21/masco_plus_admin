import { NavLink } from "react-router";
import { itemsRoutes } from "../../../ItemsRoutes";
import logo from "/logo.jpeg";

export const ItemsSidebar = () => {
  return (
    <div className="w-72 flex flex-col  p-5 rounded-r-3xl shadow-md h-screen">
      <div className="w-full flex justify-center ">
        <img
          src={logo}
          alt="Logo de Masco Plus"
          className="w-32 rounded-full"
        />
      </div>
      <nav className="mt-9">
        {itemsRoutes.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-white p-2 rounded-xl text-2xl bg-secundary mb-3"
                : "flex items-center gap-2 p-2 rounded-xl hover:bg-setext-secundary text-2xl hover:bg-secundary hover:text-white mb-3"
            }
            key={item.path}
            to={item.path}
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
