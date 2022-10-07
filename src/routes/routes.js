import { createBrowserRouter } from "react-router-dom";
import AddContact from "../pages/addContact/addContact";
import InfoContact from "../pages/infoContact/infoContact";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "add-contact",
     element: <AddContact />,
    },
    {
      path: "info",
      element: <InfoContact />,
    },
    {
      path: "update",
      element: <AddContact />,
    },
  ]);
  export default router;