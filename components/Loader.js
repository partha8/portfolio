import React from "react";
import logo from "../public/ps.png";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-[100vh] bg-[#111827] flex items-center justify-center">
      <section className="relative flex items-center justify-center">
        <Image alt="logo" width={200} src={logo} />

        <div class="circle">
          <div class="circle__item">
            <svg class="circle__spinner" viewBox="0 0 50 50">
              <circle
                class="path"
                cx="25"
                cy="25"
                r="21"
                fill="none"
                stroke="#93bfec"
                stroke-width="11"
              ></circle>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};
