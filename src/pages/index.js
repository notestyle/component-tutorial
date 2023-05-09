import Cart from "@/components/cart";
import SideBar from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" w-screen h-screen flex flex-col justify-start gap-8 bg-gradient-to-br from-30% from-main via-mid to-dark">
      <SideBar />

      <div className="w-full h-full ml-60 p-16 text-white">
        <div className="text-6xl">200</div>
        <div className="flex gap-8 w-full mt-8">
          <Cart number={12.5} lastNumber={12.2} percentage={-4.6} />
          <Cart number={23.5} lastNumber={55.2} percentage={-4.6} />
          <Cart number={14.5} lastNumber={8.2} percentage={-4.6} />
          <Cart number={14.5} lastNumber={8.2} percentage={-4.6} />
        </div>
      </div>
    </div>
  );
}
