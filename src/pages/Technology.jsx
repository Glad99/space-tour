import { useState } from "react";
import data from "../assets/data.json"
import bg from "../assets/technology/background-technology-desktop.jpg";


const Technology = () => {
  const [technology] = useState(data.technology)
  const [index, setIndex] = useState(0)
  const [isActive, setIsActive] = useState(0)

console.log(technology)
  const current = technology[index]

  function handleClick (args){
    setIndex(args)
    setIsActive(args)
  }
  
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg})`,
      }}
      className="technology h-screen flex gap-40 px-24 overflow-hidden  py-36"
    >
      <div className="text-white">
        <p className="flex barlow-condensed-regular text-2xl gap-4 ml-20 tracking-widest">
          <span className="text-white opacity-[20%] barlow-condensed-regular">03</span>SPACE LAUNCH 101
        </p>
        <div className="flex gap-16 mt-20 px-20">
          <div className=" flex flex-col gap-5 bellefair-regular *:flex *:border *:border-slate-700 *:rounded-full *:w-14 *:h-14 *:justify-center *:items-center *:text-xl">
            <div onClick={() => handleClick(0)} className={`${isActive===0 ? "bg-white text-black ":"" } cursor-pointer`}>1</div>
            <div onClick={() => handleClick(1)} className={`${isActive===1 ? "bg-white text-black ":"" } cursor-pointer`}>2</div>
            <div onClick={() => handleClick(2)} className={`${isActive===2 ? "bg-white text-black ":"" } cursor-pointer`}>3</div>
          </div>
          <div>
            <p className="barlow-condensed-regular text-[12px] tracking-widest">THE TERMINOLOGY..</p>
            <h1 className="bellefair-regular text-4xl mt-1 mb-4 tracking-widest uppercase">{current.name}</h1>
            <p className="barlow-regular text-[#D0D6F9] pr-[450px] ">
              {current.description}
            </p>
          </div>
        </div>
      </div >
      <img src={current.images.webp} alt={current.name} className="object-cover h-[24rem] mt-[30px] absolute right-0" />
    </div>
  );
}

export default Technology