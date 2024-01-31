import bg from "../assets/technology/background-technology-desktop.jpg";

const Technology = () => {
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
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div>
            <p className="barlow-condensed-regular text-[12px] tracking-widest">THE TERMINOLOGY..</p>
            <h1 className="bellefair-regular text-4xl mt-1 mb-4 tracking-widest">LAUNCH VEHICLE</h1>
            <p className="barlow-regular text-[#D0D6F9]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sequi ea quae iusto corporis perspiciatis. Alias eveniet, repellat
              itaque, ea quaerat architecto dolorem excepturi quam, accusantium
              animi possimus temporibus molestias.
            </p>
          </div>
        </div>
      </div >
      <img className="mt-9 h-[400px]" src="src/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
    </div>
  );
}

export default Technology