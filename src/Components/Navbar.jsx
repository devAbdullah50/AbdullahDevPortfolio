import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='w-full fixed bg-[#121212]'>
        <div className='flex justify-between flex-col md:flex-row py-4 px-1 items-center'>

      <div className="logo text-4xl font-bold"><Logo/></div>
      <div className=''>

      <ul className='flex space-x-4 text-xl text-gray-300'>
        <li className='hover:text-white cursor-pointer'><a href="#about">About</a></li>
        <li className='hover:text-white cursor-pointer'><a href="#projects">Projects</a></li>
        <li className='hover:text-white cursor-pointer'><a href="#contact">Contact</a></li>
        <li className='hover:text-white cursor-pointer'>Blog</li>
      </ul>
      </div>
        </div>
    
      <div className="hr h-[1px] w-full mx-auto bg-gray-700"></div>
    </nav>
  )
}

export default Navbar
