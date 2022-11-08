import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem('token');
		navigate('/', { replace: true })
	}
	return (
		<div>
			<button onClick={logout} className='flex space-x-2 text-sm py-1 px-2 bg-red-400 hover:bg-green-400 hover:text-white border-red-400 rounded-xl text-white '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
			</svg>
				Logout</button>
		</div>
	)
}

export default Logout