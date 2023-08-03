import React from "react";
import logo from "../images/logo.svg";

import { FcMenu } from "react-icons/fc";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between px-6 py-10">
      <img src={logo} alt="Shortly logo" />
      <button>
        <FcMenu className="text-3xl" />
      </button>
    </header>
  );
};

export default Header;
