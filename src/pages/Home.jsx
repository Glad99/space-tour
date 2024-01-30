import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div style={{backgroundSize: "cover", backgroundRepeat:"no-repeat",backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}} className="h-screen px-36 pt-24 text-white flex flex-col justify-center ">
        <div className="flex justify-between items-center">
            <div className="w-[33%] text-[#D0D6F9]">
            <h2 className="barlow-condensed-regular text-2xl mb-5 tracking-widest text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="bellefair-regular text-8xl text-white mt-9">SPACE</h1>
            <p className="text-sm mt-10 leading-6 text-[#D0D6F9]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="bg-white
            text-black text-xl
            flex items-center justify-center mt-20 mr-20 h-40 w-40 p-28 rounded-full shadow-xl"><Link to={"./Destination"}>EXPLORE</Link></div>
        </div>
    </div>
  )
}

export default Home