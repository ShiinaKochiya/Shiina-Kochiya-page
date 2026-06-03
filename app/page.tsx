import Image from "next/image";
import background from "#/image/hero-bg.jpg"
import sidebar from "#/image/side.png"

export default function Home() {
  return (
    <div className="relative items-center justify-center font-sans bg-white h-auto">
      <div className="absolute bg-linear-to-r from-transparent via-black to-black w-5/6 h-full right-0 z-2"></div>
      <Image 
        src={background}  
        alt={"Background image"}
        className="w-full"
        />
      <Image 
      src={sidebar}
      alt="sidebar"
      className="right-0 top-0 h-full w-auto absolute z-5"
      />
      <div className="absolute top-[20%] right-[9%] z-6">
        <h3 className="font-aldrich text-white text-6xl font-bold weight-200">
          Shiina Kochiya
        </h3>
        <p className="font-yasashisa text-white text-xl text-center mr-12">
        シイナ • コチヤ
        </p>
      </div>
    </div>
  );
}
