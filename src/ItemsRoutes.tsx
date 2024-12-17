import { FaHome } from "react-icons/fa";
import { Home } from "./presentation/pages/home/Home";

interface IItemsRoutes {
  path: string;
  title: string;
  component: JSX.Element;
  icon: JSX.Element;
}

export const itemsRoutes: IItemsRoutes[] = [
  {
    path: "home",
    title: "Inicio",
    component: <Home />,
    icon: <FaHome />,
  },
];
