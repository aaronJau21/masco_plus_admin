import { NavLink } from "react-router";
import { IItemsRoutes, itemsRoutes } from "../../../ItemsRoutes";
import logo from "/logo.jpeg";
import { useEffect, useState } from "react";

export const ItemsSidebar = () => {
  const [menuItems, setMenuItems] = useState<IItemsRoutes[]>([]);

  useEffect(() => {
    const filteredItems = itemsRoutes.filter((item) => item.title);
    setMenuItems(filteredItems);
  }, []);

  const activeClass =
    "flex items-center gap-2 text-white p-2 rounded-xl text-2xl bg-secundary mb-3";
  const inactiveClass =
    "flex items-center gap-2 p-2 rounded-xl text-2xl hover:bg-secundary hover:text-white mb-3";

  return (
    <div className="w-72 flex flex-col p-5 rounded-r-3xl shadow-md h-screen">
      <div className="w-full flex justify-center">
        <img
          src={logo}
          alt="Logo de Masco Plus"
          className="w-32 rounded-full"
        />
      </div>
      <nav className="mt-9">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              {item.icon}
              {item.title}
            </NavLink>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hay elementos disponibles
          </p>
        )}
      </nav>
    </div>
  );
};
