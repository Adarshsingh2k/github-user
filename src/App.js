import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import UserDetails from "./Components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/user/:username",
    element: <UserDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
