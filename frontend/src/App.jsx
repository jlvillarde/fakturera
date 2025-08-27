import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // ✅ import Navigate
import HomeLayout from "./layouts/HomeLayout";
import { LanguageProvider } from "./contexts/LanguageContext";

import "./App.css";

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
]);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
