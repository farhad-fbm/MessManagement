/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"

export const NavLinks = () => {
  const navs = [
    { name: 'Home', link: '/' },
    { name: 'Login', link: '/login' },
    { name: 'SignIn', link: '/signIn' },
    { name: 'SignUp', link: '/signUp' },
  ]
  return (
    <>
      {
        navs.map((nav, idx) => (
          <div key={idx} className="">
            <NavLink
              to={`${nav.link}`}
              className={
                ({ isActive, isPending, isTransitioning }) =>
                  [
                    isActive ? "border-b-4 border-b-white pb-1" : '',
                    isTransitioning ? "transitioning" : "",
                  ].join("")
              }
            >
              {nav.name}
            </NavLink>
          </div>
        ))
      }
    </>
  )
}
