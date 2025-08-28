import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // ✅ import Navigate
import HomeLayout from "./layouts/HomeLayout";
import { LanguageProvider } from "./contexts/LanguageContext";

import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DummyPage from "./pages/DummyPage";
import PriceListPage from "./pages/PriceListPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="terms" replace />,
      },
      {
        path: "terms",
        element: <HomeLayout />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="pricelist" replace />
      },
      {
        path: "pricelist",
        element: <PriceListPage />
      },
      {
        path: "*",
        element: <DummyPage />
      }
    ],
  },
]);


function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
