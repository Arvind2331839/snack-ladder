import React from "react";
import DashBoard from "./DashBoard";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";

const Navbar = ({ sideBarToggle, setSideBarToggle }) => {
  //

  return (
    <div className={`${sideBarToggle ? "" : "ml-30 sm:ml-64"}`}>
      <nav class={`bg-white border-gray-200 dark:bg-gray-900 `}>
        <divvv class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            onClick={() => setSideBarToggle(!sideBarToggle)}
            className="flex flex-row text-white"
          >
            <GiHamburgerMenu className="my-auto text-xl" />
            <span class="self-center text-2xl ml-3 font-semibold whitespace-nowrap dark:text-white">
              Snack
            </span>
          </div>

          <div class="flex md:order-2">
           <div class="w-full max-w-sm min-w-[200px]">
  <divbbbb class="relative flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
    </svg>
 
    <input
    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    placeholder="UI Kits, Dashboards..." 
    />
    
    <button
      class="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
    >
    <CiLocationArrow1 />
    </button> 
  </divbbbb>
</div>
          </div>
        </divvv>
      </nav>
      <DashBoard />
    </div>
  );
};

export default Navbar;
