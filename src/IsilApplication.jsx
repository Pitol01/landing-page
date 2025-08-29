import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./features/home/HomePage";
import { ActividadesPage } from "./features/actividades/ActividadesPage";
import { AppLayout } from "./layouts/AppLayout";

export const IsilApplication = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="actividades" element={<ActividadesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
