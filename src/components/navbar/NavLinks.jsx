import { NavLink } from "react-router-dom"

export const NavLinks = () => {
  const navs = [
    { name: 'Home', link: '/home' },
    { name: 'Login', link: '/login' },
    { name: 'SignIn', link: '/signIn' },
    { name: 'SignUp', link: '/signUp' },
  ]
  return (
    <>
      {
        navs.map((nav,idx)=>(
          <div key={idx} className="">
            <NavLink to={`${nav.link}`}>{nav.name}</NavLink>
          </div>
        ))
      }
    </>
  )
}