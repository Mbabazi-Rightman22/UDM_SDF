import React, { useRef } from "react";
import SidebarLinkGroup from "../../partials/SidebarLinkGroup";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebar = useRef(null);
  const trigger = useRef(null);
  return (
    <div style={{ width: sidebarOpen ? "0px" : "auto" }}>
      {/* <div
				className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
				aria-hidden="true"
			></div> */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0  lg:static lg:left-auto lg:top-auto h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-56  lg:sidebar-expanded:!w-56 2xl:!w-56 shrink-0 bg-slate-400 p-4  ${
          sidebarOpen ? "-translate-x-56" : "translate-x-0"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <div className="w-16 fill-yellow-100 align-items-center ml-9">
            {/* <a href="/Home">
              <figure className="w-[75px] h-[60px] flex justify-center items-center ml-3 fill-yellow-100 relative rounded-md drop-shadow-lg ">
                <img
                  className="w-full object-cover rounded-full "
                  src={require("../../Images/logo.png")}
                  alt="logo"
                />
              </figure>
            </a> */}
          </div>
        </div>
        {/* Links */}
        <div className="space-y-8">
          <div>
            <SidebarLinkGroup />
          </div>
          <div className="underline text-xl ">
            <a
              className="absolute bottom-10 "
              rel="noreferrer"
              href="$"
              target="_blank"
            >
              Visit us at UDM 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;