import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Header = () => {
    const [ showMenu,setShowMenu ] = useState(false);
    const handleShowMenu = ()=>{
      setShowMenu(preve => !preve)
    }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="flex item-center">
            <div className="nav_logo" />
          </div>
        </Link>

        <div className="flex items-center md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute right-12 py-2 px-2 bg-red-400 shadow drop-shadow-md flex flex-col">
                <Link to={"profile"} className="whitespace-nowrap cursor-pointer">Profile Setting</Link>
                <Link to={"Login"} className="whitespace-nowrap cursor-pointer">LogIn</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="nav_cart" />
            <div className="item-number absolute -top-3 right-3 text-xl">0</div>
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
}

export default Header;