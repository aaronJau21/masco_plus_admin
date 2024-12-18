import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayouts } from "./presentation/layouts/MainLayouts";
import { Login } from "./presentation/pages/auth/Login";
import { itemsRoutes } from "./ItemsRoutes";
import { ProtectedRoute } from "./presentation/protected/ProtectedRoute";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <MainLayouts />
            </ProtectedRoute>
          }
        >
          {itemsRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.component} />
          ))}
        </Route>
        <Route path="" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
