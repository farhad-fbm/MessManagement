import { createBrowserRouter } from "react-router-dom"
import { Root } from "../../Root"
import { ErrorPage } from "../ErrorPage"
import { Home } from "../home/Home"
import { Login } from './../auth/Login';
import { Calendar } from "../calendar/Calendar.jsx";
import { PrivateRouter } from "./PrivateRouter";
import { Dasboard } from "../dashboard/Dasboard.jsx";
import AddMember from './../members/AddMember';
import { MembersInfo } from "../members/MembersInfo.jsx";

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
        // element: <PrivateRouter><Calendar /></PrivateRouter>
        element: <Calendar />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dasboard />
      },
      {
        path: '/addMember',
        element: <AddMember />
      },
      {
        path: '/membersInfo',
        element: <MembersInfo />
      },
    ]
  }
])