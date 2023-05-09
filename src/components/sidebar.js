import React from "react";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between w-60 h-full fixed left-0 top-0 p-10 bg-gradient-to-b from-main to-dark rounded-xl">
      <div className="flex flex-col items-center">
        <div className="text-primary font-bold text-xl">SalesBorad</div>
        <div className="mt-20 text-white flex flex-col gap-8 font-bold">
          <div>Home</div>
          <div>Product</div>
          <div>Message</div>
          <div>Members</div>
          <div>Report</div>
        </div>
      </div>

      <button className="text-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        Logout
      </button>
    </div>
  );
}
