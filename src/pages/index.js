import Cart from "@/components/cart";
import ToggleButton from "@/components/darkbutton";
import SideBar from "@/components/sidebar";
import { useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Home() {
  const [total, setTotal] = useState(0)
  const [visible, setVisible] = useState(true)
  return (
    <div className=" w-screen h-screen flex flex-col dark:bg-black justify-start gap-8 bg-white">
      <SideBar />

      <div className="w-full h-full ml-60 p-16 text-white">
        <div className="text-6xl">{total}</div>
        <div className="flex gap-8 w-full mt-8">
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} eye={() => setVisible(!visible)} see={visible} number={12.5} lastNumber={12.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} eye={() => setVisible(!visible)} see={visible} number={23.5} lastNumber={55.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} eye={() => setVisible(!visible)} see={visible} number={14.5} lastNumber={8.2} percentage={-4.6} />
          <Cart add={(num) => setTotal(total + num)} sub={(num) => setTotal(total - num)} eye={() => setVisible(!visible)} see={visible} number={14.5} lastNumber={8.2} percentage={-4.6} />
        </div>
      </div>
      <ToggleButton />
    </div>
  );
}
