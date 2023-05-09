import Cart from "@/components/cart";
import SideBar from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [total, setTotal] = useState(0)
  return (
    <div className=" w-screen h-screen flex flex-col justify-start gap-8 bg-gradient-to-br from-30% from-main via-mid to-dark">
      <SideBar />

      <div className="w-full h-full ml-60 p-16 text-white">
        <div className="text-6xl">{total}</div>
        <div className="flex gap-8 w-full mt-8">
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} number={12.5} lastNumber={12.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} number={23.5} lastNumber={55.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} number={14.5} lastNumber={8.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} number={14.5} lastNumber={8.2} percentage={-4.6} />
        </div>
      </div>
    </div>
  );
}
