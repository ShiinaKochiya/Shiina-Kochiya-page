"use client";
import React from "react";


export default function Stripe({}){
     return (
        <div className="relative w-200vw h-15 overflow-hidden">
            <div className={`bg-black absolute w-full h-20 right-[-50%] animate-[slide_10s_linear_infinite] overflow-hidden`} style={
                {
                    background: "repeating-linear-gradient(-60deg, #ffffff, #ffffff 12px, #000000 12px, #000000 45px) repeat",
                    }
                }>
            </div>

            <div className={`bg-black absolute w-full h-20 left-[-50%] animate-[slider_10s_linear_infinite] overflow-hidden`} style={
                {
                    background: "repeating-linear-gradient(60deg, #ffffff, #ffffff 12px, #000000 12px, #000000 45px) repeat",
                    }
                }>
            </div>
        </div>
  );
}
