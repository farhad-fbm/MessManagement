import { NavLinks } from "./NavLinks"


export const Navbar = () => {
  return (
    <nav className="flex justify-between px-6">
      <div className="">LoGo</div>
      <div className="flex justify-center gap-x-10"><NavLinks/></div>
      <div className="">UserPic</div>
    </nav>
  )
}
