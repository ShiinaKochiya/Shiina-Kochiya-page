
import Stripe from "./components/stripe";
import Hero from "./components/hero";

import Image from "next/image";
import pfpL from "#/image/pfp_left.png"
import pfpR from "#/image/pfp_right.png"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Stripe/>
      <div className="w-full text-2xl mt-20 relative">
        <div className="w-1/2 mx-auto text-pretty text-justify">

          <h2 className="font-aldrich text-6xl my-10">Shiina Kochiya</h2>
        
          <p className="text-2xl my-10">Programmer, photographer and do basically anything I want to</p>

          <p className="text-2xl my-10">Commonly work with Next.js, React, Express, Elysia (Basically any JavaScript frameworks I feel funny enough to use), Lua, Python, Java</p>

          <p className="text-2xl my-10">I also shoot pictures for fun, out of boredom. Most of them are cosplay and scenery</p>

          <p className="text-2xl my-10">I also game. Fulltime gacha addict, rhythm game enthusiast, and FPS enjoyer. Mostly active on Arknights, Endfield, THE FINALS, maimai and VALORANT</p>
        </div>
        {/*Unorthodox pfp placement*/}
        <div className="w-full absolute top-[25%] mx-0">
          <Image
            src={pfpL}
            alt="Left Profile Picture"
            className="absolute left-0 top-0 h-100 w-auto"
          />
          <Image
            src={pfpR}
            alt="Right Profile Picture"
            className="absolute right-0 top-0 h-100 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
