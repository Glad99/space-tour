import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className=" bgMobile-home md:bgTablet-home lg:bgDeskstop-home h-[1000px] w-screen overflow-hidden lg:px-36 lg:pt-[450px] text-white flex flex-col justify-center mt-[-210px] lg:mt-none">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className=" w-screen lg:w-[33%] text-[#D0D6F9]">
          <h2 className="barlow-condensed-regular text-[20px] text-opacity-60    md:text-xl lg:text-2xl mb-3 tracking-widest text-[#D0D6F9] px-[82px] lg:px-0 w-screen">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="bellefair-regular text-[82px] lg:text-[115px] text-white lg:mt-1 px-[75px] lg:px-0 ">SPACE</h1>
          <p className="text-[14px] mt-3 mb-2 leading-6 text-[#D0D6F9] px-7 lg:px-0 lg:text-start text-center text-opacity-80 w-[320px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className=" bellefair-regular bg-white
            text-black text-xl
            flex items-center justify-center mt-[50px] mb-[-280px] lg:mb-none lg:mt-20 lg:mr-30 h-[160px] w-[160px] w-25 lg:h-40 lg:w-40 p-10 pt-12 lg:p-28 rounded-full shadow-xl"
        >
          <Link to={"./Destination"}>EXPLORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Home