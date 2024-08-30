import { NavLinks } from "./NavLinks"


export const Navbar = () => {
  return (
    <nav className="max-w-4xl mx-auto flex justify-between pt-6 px-2 gap-x-16">
      <div className="">LoGo</div>
      <div className="flex justify-center gap-x-4"><NavLinks /></div>
      <div className="">UserPic</div>
    </nav>
  )
}
