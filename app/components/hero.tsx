"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import background from "#/image/hero-bg.jpg"
import sidebar from "#/image/side.png"

import angeButton from "#/buttons/ange.png"
import balaButton from "#/buttons/balaknights.png"
import photoButton from "#/buttons/photo.png"

import ca25 from "#/socials/CA25.png"
import github from "#/socials/github.png"
import facebook from "#/socials/facebook.png"

export default function Hero({}){
     return (
    <div className="relative items-center justify-center font-sans bg-white h-auto">
      <div className="absolute bg-linear-to-r from-transparent via-black to-black w-7/8 h-full right-0 z-2"/>
      <div className="absolute bg-linear-to-l from-transparent to-black w-1/4 h-full left-0 z-2"/>
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
        <h3 className="font-aldrich text-white text-6xl">
          Shiina Kochiya
        </h3>
        <p className="font-yasashisa text-white text-xl text-center mr-12">
        シイナ • コチヤ 
        </p>
      </div>
      <h3 className=" absolute top-[30%] right-[9%] font-aldrich text-white text-4xl mt-4 w-5/13 z-6 text-right">
          <span className="text-cyan-300">Code</span>, <span className="text-orange-400">Photography</span> and everything that sparks <span className="text-emerald-400">interest</span>
      </h3> 


      <div className="absolute top-[50%] right-[9%] z-6 w-full">
        <Link href={"https://github.com/ShiinaKochiya/angelina-chan-sc"} className="absolute right-0">
          <Image 
            src={angeButton}
            alt="ange"
            className="h-15 w-auto cursor-pointer"
          />
        </Link>
        <Link href={"https://github.com/ShiinaKochiya/balaknights"} className="absolute right-11.25 top-[53.5px]">
          <Image 
            src={balaButton}
            alt="balaknights"
            className="h-15 w-auto cursor-pointer"
          />
        </Link>
        <Link href={"/photo"} className="absolute right-86.75 top-[26.75px]">
          <Image 
            src={photoButton}
            alt="photo"
            className="h-15 w-auto cursor-pointer"
          />
        </Link>
      </div>

      <div className="absolute top-[70%] right-[9%] z-6 flex flex-row">
        <Link href={"https://ca-25-shiinakochiyas-projects.vercel.app"} className="h-10 w-auto cursor-pointer mx-2">
        <Image
          src={ca25}
          alt="CA25"
          className="h-10 w-auto cursor-pointer mx-2"
        />
        </Link>
        <Link href={"https://github.com/ShiinaKochiya"} className="h-10 w-auto cursor-pointer mx-2">
        <Image
          src={github}
          alt="GitHub"
          className="h-10 w-auto cursor-pointer mx-2"
        />
        </Link>
        <Link href={"https://www.facebook.com/ShiinaKochiya"} className="h-10 w-auto cursor-pointer mx-2">
        <Image
          src={facebook}
          alt="Facebook"
          className="h-10 w-auto cursor-pointer mx-2"
        />
        </Link>
      </div>
    </div>
  );
}
