import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {

	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen overflow-hidden'>

			{/* Sidebar code */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			
			<div style={{width:"100% !important"}} className='relative flex flex-col flex-1 overflow-auto overflow-x-hidden'>
				{/* Site header */}
				
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				
				<main>
					<div className="px-2 sm:px-2 lg:px-2 py-2 w-full h-full max-w-9xl mx-auto">
                        
						{children}

					</div>
				</main>
				<footer className="w-full h-8 bg-black border-t-2 border-blue
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-l
            ">
            Developed by ESRI Rwanda Ltd. &#169; 2022
        </footer>
			</div>



		</div>
	)
}

export default Layout