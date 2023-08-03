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
      window.addEventListener("resize", handleResize);
    };

    window.addEventListener("resize", handleResize);
  }, [showMenu]);

  return (
    <header className="px-6 py-10">
      <div className="flex justify-between">
        <img src={logo} alt="Shortly logo" />
        <button>
          <FcMenu className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
        </button>
      </div>
      {showMenu && <MobileMenu />}
    </header>
  );
};

export default Header;
