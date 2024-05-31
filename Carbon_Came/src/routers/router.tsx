import { createBrowserRouter } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import App from "@/App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/TestPage",
    element: <TestPage />,
  },
]);
