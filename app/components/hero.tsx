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
    <div>
      {/*View - PC*/}
      <div className="relative items-center justify-center font-sans bg-black h-auto hidden lg:block">
        {/*Gradients*/}
        <div className="absolute bg-linear-to-r from-transparent via-black to-black w-7/8 h-full right-0 z-2"/>
        <div className="absolute bg-linear-to-l from-transparent to-black w-1/4 h-full left-0 z-2"/>
        <div className="absolute bg-linear-to-b from-transparent to-black w-full h-1/4 bottom-0 z-2"/>
        {/*Background*/}
        <Image 
          src={background}  
          alt={"Background image"}
          className="w-full"
          loading="eager"
          />
        {/*Sidebar*/}
        <Image 
        src={sidebar}
        alt="sidebar"
        className="right-0 top-0 h-full w-auto absolute z-5"
        loading="eager"
        />

        {/*Texts - Name*/}
        <div className="absolute top-[18%] right-[9%] z-6">
          <h3 className="font-aldrich text-white text-6xl">
            Shiina Kochiya
          </h3>
          <p className="font-yasashisa text-white text-xl text-center mr-12">
          シイナ • コチヤ 
          </p>
        </div>
        
        {/*Texts - Quote*/}
        <h3 className=" absolute top-[31%] right-[9%] font-aldrich text-white text-4xl mt-4 w-5/13 z-6 text-right">
            <span className="text-cyan-300">Code</span>, <span className="text-orange-400">Photography</span> and everything that sparks <span className="text-emerald-400">interest</span>
        </h3> 

        {/*Buttons*/}
        <div className="absolute top-[54%] right-[9%] z-6 w-full">
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

        {/*Socials*/}
        <div className="absolute top-[73%] right-[9%] z-6 flex flex-row">
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



        {/**Big fatass ahh space so I dont have to find
        * "Yo wheres the mobile view"
        */}



      {/*View - Mobile*/}
      <div className="w-full h-auto bg-black text-white text-center lg:hidden">
       {/**Background and overlay */} 
        <div className="relative">
          <Image 
            src={background}  
            alt={"Background image"}
            className="w-full"
            loading="eager"
          />
          <div className="absolute bg-linear-to-b from-transparent to-black w-full h-full bottom-0 z-2"/>
        </div>

        {/**Text - Name*/}
        <div className="relative mt-10 bg-black right-[50%%] z-6">
          <h3 className="font-aldrich text-white text-6xl">
            Shiina Kochiya
          </h3>
          <p className="font-yasashisa text-white text-xl text-center mr-12">
          シイナ • コチヤ 
          </p>
        </div>

        {/*Texts - Quote*/}
        <div className="w-full flex justify-center">
          <h3 className="relative font-aldrich text-white text-4xl mt-4 w-3/4 z-6 text-center">
              <span className="text-cyan-300">Code</span>, <span className="text-orange-400">Photography</span> and everything that sparks <span className="text-emerald-400">interest</span>
          </h3>
        </div>

        {/**Buttons */}
        <div className="relative w-full h-auto my-10 items-center">
          <Link href={"https://github.com/ShiinaKochiya/angelina-chan-sc"}>
            <Image 
              src={angeButton}
              alt="ange"
              className="h-15 w-auto cursor-pointer mx-auto"
            />
          </Link>
          <Link href={"https://github.com/ShiinaKochiya/balaknights"}>
            <Image 
              src={balaButton}
              alt="balaknights"
              className="h-15 w-auto cursor-pointer mx-auto"
            />
          </Link>
          <Link href={"/photo"}>
            <Image 
              src={photoButton}
              alt="photo"
              className="h-15 w-auto cursor-pointer mx-auto"
            />
          </Link>
        </div>


      </div>
    </div>
  );
}
