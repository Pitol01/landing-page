import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./ui/layouts/AppLayout";
import { CalculadoraPage } from "./features/calculadora/CalculadoraPage";

export const IsilApplication = () => {
  return (
    <>
      <BrowserRouter basename="/landing-page">
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
