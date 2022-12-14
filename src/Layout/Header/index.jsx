import React from 'react'
import Logout from '../../partials/Logout';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header className="sticky top-0 bg-cyan-100 px-2 sm:px-2 lg:px-2 border-b border-slate-200 z-30">
            <div className="px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16 -mb-px ">

                    {/* Header: Left side */}
                    <div className="flex">

                        {/* Hamburger button */}
                        <button
                            className="text-slate-500 hover:text-slate-600 "
                            aria-controls="sidebar"
                            // aria-expanded={sidebarOpen}
                            onClick={(e) => { setSidebarOpen(!sidebarOpen); }}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="5" width="16" height="2" />
                                <rect x="4" y="11" width="16" height="2" />
                                <rect x="4" y="17" width="16" height="2" />
                            </svg>
                        </button>

                    </div>

                    {/* Header: Right side */}
                    <div className='m-2 text-sm md:text-3xl font-Medium bg-clip-text  '>Urban Dynamic Mapping</div>
                    <div className="flex items-center">
                        <hr className="w-px h-4 bg-slate-200 mx-3" />
                        <Logout/>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header