import { FaHome } from "react-icons/fa";
import { Home } from "./presentation/pages/home/Home";
import { Products } from "./presentation/pages/products/Products";
import { MdOutlineInventory } from "react-icons/md";
import { Brands } from "./presentation/pages/brands/Brands";
import { UpdateProduct } from "./presentation/pages/products/UpdateProduct";

export interface IItemsRoutes {
  path: string;
  title?: string;
  component: JSX.Element;
  icon?: JSX.Element;
}

export const itemsRoutes: IItemsRoutes[] = [
  {
    path: "home",
    title: "Inicio",
    component: <Home />,
    icon: <FaHome />,
  },
  {
    path: "brands",
    title: "Marcas",
    component: <Brands />,
    icon: <MdOutlineInventory />,
  },
  {
    path: "products",
    title: "Productos",
    component: <Products />,
    icon: <MdOutlineInventory />,
  },
  {
    path: "products/:id",
    component: <UpdateProduct />,
  },
];
