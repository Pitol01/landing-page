import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./features/home/HomePage";
import { ActividadesPage } from "./features/actividades/ActividadesPage";
import { AppLayout } from "./ui/layouts/AppLayout";
import { Eventos } from "./features/Eventos/Eventos";

export const IsilApplication = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="about" element={<h1>Que hacemos?</h1>}/> 
            <Route path="activities" element={<ActividadesPage />} />
            <Route path="calculate-promedio"element={<h1>calculadora</h1>}/>
            <Route path="events" element={<Eventos />} />
            <Route path="resources" element={<h1>Recursos</h1>} />
            <Route path="credits" element={<h1> creditos</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
