import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
        <h1 className='font-bold'>Github Search</h1>

        <span>
            <Link className='mr-2' to={"/"}>Home</Link>
            <Link to={"/favourites"}>Fovourites</Link>
        </span>
    </nav>
  )
}

export default Header