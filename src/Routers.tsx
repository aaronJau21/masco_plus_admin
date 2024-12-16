import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayouts } from "./presentation/layouts/MainLayouts";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />} />
      </Routes>
    </BrowserRouter>
  );
};
