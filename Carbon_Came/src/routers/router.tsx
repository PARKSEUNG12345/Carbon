import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import PersonalPage from "@/pages/PersonalPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/personal",
    element: <PersonalPage />,
  },
]);
