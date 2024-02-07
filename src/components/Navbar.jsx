import { Link } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import Technology from "../pages/Technology"
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false)
  console.log(show);

  return (
    <nav className="flex px-5 fixed w-screen justify-between  items-center bg-transparent pl:0 md:pl-14 pt-10">
        <div>
            <img className="h-10" src={logo} alt="" />
            <hr className=" hidden lg: absolute top-[80px] left-36 z-40  border-slate-700 w-[30rem]" />
        </div>
        <div className=" hidden barlow-condensed-extralight text-white gap-10 items-center pl-24 pr-48 py-7 lg:absolute right-0  bg-gray-900/50 backdrop-blur-2xl  md:flex *:flex *:gap-3 *:tracking-widest ">
            <Link to={"/"}><b>00</b> <p>HOME</p></Link>
            <Link to={"./Destination"}><b>01</b> <p>DESTINATION</p></Link>
            <Link to={"./Crew"}><b>02</b> <p>CREW</p></Link>
            <Link to={"./Technology"}><b>03</b> <p>TECHNOLOGY</p></Link>
        </div>
      {show ===false ? (
        <TfiMenu onClick={() => setShow( prev => !prev)} className="text-white text-3xl md:hidden"/>
      ): (
        <AiOutlineClose onClick={() => setShow ( prev => !prev)} className="text-[#D0D6F9] text-3xl md:hidden"/>
      )}
      { show && <aside className="md:hidden fixed flex flex-col h-screen top-0  right-0 -z-30 w-[70%] barlow-condensed-extralight text-white gap-8 items-center pl-10 pt-20    text-[16px] bg-white/10 backdrop-blur-md text-base *:flex *:gap-3"><Link to={"/"}><b>00</b> <p>HOME</p></Link>
            <Link to={"./Destination"}><b>01</b> <p>DESTINATION</p></Link>
            <Link to={"./Crew"}><b>02</b> <p>CREW</p></Link>
            <Link to={"./Technology"}><b>03</b> <p>TECHNOLOGY</p></Link></aside>}
    </nav>
  )
}

export default Navbar