import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import Technology from "../pages/Technology"

const Navbar = () => {
  return (
    <nav className="flex fixed w-screen justify-between  items-center bg-transparent pl-14 pt-10">
        <div>
            <img className="h-10" src={logo} alt="" />
            <hr className="absolute top-[80px] left-36 z-40  border-slate-700 w-[30rem]" />
        </div>
        <div className=" barlow-condensed-extralight text-white gap-10 items-center pl-24 pr-48 py-7 bg-gray-900/50 backdrop-blur-2xl  flex *:flex *:gap-3 *:tracking-widest ">
            <Link to={"/"}><b>00</b> <p>HOME</p></Link>
            <Link to={"./Destination"}><b>01</b> <p>DESTINATION</p></Link>
            <Link to={"./Crew"}><b>02</b> <p>CREW</p></Link>
            <Link to={"./Technology"}><b>03</b> <p>TECHNOLOGY</p></Link>
        </div>
    </nav>
  )
}

export default Navbar