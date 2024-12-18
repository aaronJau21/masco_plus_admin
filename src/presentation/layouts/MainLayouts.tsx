import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";

export const MainLayouts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
