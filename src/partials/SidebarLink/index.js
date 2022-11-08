import React from 'react'
import { useLocation } from 'react-router-dom';

const SidebarLink = ({sidebarItem}) => {
	
	const location = useLocation();

	return (
		<li className={`px-2 py-2 text-base font-normal  dark:text-dark hover:rounded-md hover:bg-gray-400 white:hover:bg-gray-700 transition-[300] ease-in-out delay-750 hover:-translate-y-2 duration-300 ${location.pathname === sidebarItem.link ? 'bg-gray-600 text-white rounded-md': ''}`}>
			<a
				href={sidebarItem.link}
				className='text-dark-400 hover:text-dark-400 flex tracking-wide'
			>
				<div className="flex items-center">
					
					<span className="text-lg font-normal lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{sidebarItem.name}</span>
				</div>
			</a>
		</li>
	)
}

export default SidebarLink