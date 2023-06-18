import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import BaseLayout from "./components/BaseLayout";
import NotFound from "./pages/404";
import LoginPage from "./pages/LoginPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="produtos/:id/*" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
