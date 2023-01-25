import Home from "../pages/home";
import Login from "../pages/login";
export const RoutingConfig = {
  Home: {
    auth: true,
    path: "/",
    name: "home",
    element: <Home />,
  },
  Login: {
    auth: true,
    path: "/login",
    name: "login",
    element: <Login />,
  },
};
