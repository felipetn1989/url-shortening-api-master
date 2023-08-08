import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";

import { FcMenu } from "react-icons/fc";
import MobileMenu from "../pages/MobileMenu";

type Props = {};

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(false);
      window.removeEventListener("resize", handleResize);
      console.log(showMenu);
    };

    window.addEventListener("resize", handleResize);
  }, [showMenu]);

  return (
    <header className="px-6 py-10 lg:px-[10.5rem] lg:py-[3.25rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-11">
          <img src={logo} alt="Shortly logo" />
          <ul className="hidden gap-8 text-[#9e9aa7] font-bold tracking-tighter lg:flex">
            <li className="hover:cursor-pointer">Features</li>
            <li className="hover:cursor-pointer">Pricing</li>
            <li className="hover:cursor-pointer">Resources</li>
          </ul>
        </div>
        <button className="lg:hidden">
          <FcMenu className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
        </button>
        <div className="hidden translate-y-[-0.3125rem] lg:block">
          <ul className="flex items-center gap-9 font-bold text-[#9e9aa7]">
            <li className="hover:cursor-pointer">Login</li>
            <li className="bg-[#2acfcf] text-white px-5 py-2 rounded-full">Sign Up</li>
          </ul>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </header>
  );
};

export default Header;
