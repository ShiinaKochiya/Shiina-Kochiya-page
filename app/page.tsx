import Image from "next/image";
import background from "#/image/hero-bg.jpg"
export default function Home() {
  return (
    <div className="relative items-center justify-center font-sans bg-white h-auto">
      <div className="absolute bg-linear-to-r from-transparent via-black to-black w-3/4 h-full right-0 z-2"></div>
      <Image 
        src={background}  
        alt={"Background image"}
        className="w-full -left-30"
        />
    </div>
  );
}
