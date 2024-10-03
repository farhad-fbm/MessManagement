import { createBrowserRouter } from "react-router-dom"
import { Root } from "../../Root"
import { ErrorPage } from "../ErrorPage"
import { Home } from "../home/Home"
import { Login } from './../auth/Login';
import { Calendar } from "../calendar/Calendar";
import { Register } from "../auth/Register";
import { PrivateRouter } from "./PrivateRouter";

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/calendar',
        element: <PrivateRouter><Calendar /></PrivateRouter>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  }
])