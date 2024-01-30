import image from "../assets/destination/image-moon.png"
import data from "../assets/data.json"
import { useState } from "react";


const Destination = () => {
  const [destination, setDestination] = useState(data.destinations)//fetch data from the json file
const [index, setIndex] = useState(0)//set index at zero

const [isActive, setIsActive] = useState(0)

  const current = destination[index]//current will get all the index one after another


  const handleClick = (args) =>{
    setIndex(args)//onces item is clicked, the handleClick render by changing from initial value to new
    setIsActive(args)
  }
  return (
    <div className="destination h-screen text-white flex justify-between items-center px-40">
        <div className="pt-28">
          <p className="barlow-condensed-regular text-2xl   mb-14 tracking-normal md:tracking-widest flex gap-5"><span className="text-gray-500"><b>01</b></span>PICK YOUR DESTINATION</p>
        <div className="mt-4 pb-2 pl-14 flex gap-64 ">
          <img className="h-[330px]  " src={current.images.webp} alt="" />
          <div className="">
            <div className="flex gap-5 text-sm text-[#D0D6F9] cursor-pointer *:py-3 *:px-1 ">
              <p className={`${isActive === 0 ? "border-b-2 border-white text-white" : ""}`} onClick={() => handleClick(0)}>MOON</p>
              <p className={`${isActive === 1 ? "border-b-2 border-white text-white" : ""}`} onClick={() => handleClick(1)}>MARS</p>
              <p className={`${isActive === 2 ? "border-b-2 border-white text-white" : ""}`} onClick={() => handleClick(2)}>EUROPA</p>
              <p className={`${isActive === 3 ? "border-b-2 border-white text-white" : ""}`} onClick={() => handleClick(3)}>TITAN</p>
            </div>
            <h1 className="bellefair-regular text-6xl text-white mt-9 uppercase">{current.name}</h1>
            <p className="barlow-regular text-sm mt-7 leading-6 pr-[30px] text-[#D0D6F9]">{current.description}</p>
            <hr className="absolute mt-6  border-slate-700 w-[23rem]" />
            <div className="flex mt-10 gap-16">
              <div>
                <p className="barlow-condensed-thin text-[12px] text-[#D0D6F9]">AVG. DISTANCE</p>
                <p className="bellefair-regular text-l mt-1 uppercase">{current.distance}</p>
              </div>
              <div>
                <p className=" barlow-condensed-thin  text-[12px] text-[#D0D6F9]">EST. TRAVEL TIME</p>
                <p className="bellefair-regular text-l uppercase mt-1">{current.travel}</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Destination