import { createBrowserRouter } from "react-router-dom"
import { Root } from "../../Root"
import { ErrorPage } from "../ErrorPage"
import { Home } from "../home/Home"
import { Login } from './../auth/Login';
import { SignIn } from './../auth/SignIn';
import { SignUp } from './../auth/SignUp';

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
        path: '/login',
        element: <Login />
      },
      {
        path: '/signIn',
        element: <SignIn />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
    ]
  }
])