import React from "react";

type Props = {};

const MobileMenu = (props: Props) => {
  return (
    <nav className="absolute w-[87%] top-24 left-[50%] translate-x-[-50%] text-center z-30 bg-[#3b3054] text-white font-bold rounded-lg pt-[2.3125rem] pb-10 text-lg px-6">
      <ul>
        <li className="border-b border-[#9e9aa7] pb-8">
          <ul className="space-y-[1.8125rem]">
            <li className="hover:cursor-pointer hover:text-[#2acfcf]">Features</li>
            <li className="hover:cursor-pointer hover:text-[#2acfcf]">Pricing</li>
            <li className="hover:cursor-pointer hover:text-[#2acfcf]">Resources</li>
          </ul>
        </li>
        <li>
          <ul className="pt-[1.8125rem]">
            <li className="hover:cursor-pointer hover:text-[#2acfcf]">Login</li>
            <li><button className="bg-[#2acfcf] w-full py-2.5 mt-[1.6875rem] rounded-full hover:opacity-50">Sign Up</button></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
