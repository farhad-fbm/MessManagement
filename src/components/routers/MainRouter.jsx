import { createBrowserRouter } from "react-router-dom"
import { Root } from "../../Root"
import { ErrorPage } from "../ErrorPage"
import { Home } from "../home/Home"
import { Login } from './../auth/Login';
import { Calendar } from "../calendar/Calendar";
import { Register } from "../auth/Register";

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
        element: <Calendar />
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