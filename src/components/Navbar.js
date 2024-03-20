import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
    <header className="text-gray-400 bg-gray-900 body-font" style={props.mode}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl" style={props.mode}>Text Editor</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <NavLink to='/' className="px-5 py-2 hover:text-white">Home</NavLink>
              <NavLink to='/about' className="px-5 py-2 hover:text-white">About</NavLink>
              <NavLink to='/pricing' className="px-5 py-2 hover:text-white">Pricing</NavLink>
              <NavLink to='/contact' className="px-5 py-2 hover:text-white">Contact</NavLink>
            </nav>
            <i onClick={props.toggleMode} id="modeToggle" className={`fa-solid fa-toggle-${props.mode.color === "black"?"off":"on"} text-3xl ml-5`}></i>
          </div>
    </header>
    </>
  )
}

export default Navbar