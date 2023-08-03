import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import logoWhite from "../images/logoWhite.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#232127] text-center text-white py-14 grid gap-12">
      <img className="m-auto" src={logoWhite} alt="" />
      <ul className="text-[#9e9aa7] font-medium text-sm space-y-9">
        <li>
          <ul className="space-y-[0.9375rem]">
            <li className="font-bold text-white text-base pb-1.5">Features</li>

            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Link Shortening
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Branded Links
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Analytics
            </li>
          </ul>
        </li>
        <li>
          <ul className="space-y-[0.9375rem]">
            <li className="font-bold text-white text-base pb-1.5">Resources</li>

            <li className="hover: cursor-pointer hover:text-[#2acfcf]">Blog</li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Developers
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Support
            </li>
          </ul>
        </li>
        <li>
          <ul className="space-y-[0.9375rem]">
            <li className="font-bold text-white text-base pb-1.5">Company</li>

            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              About
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Our Team
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Careers
            </li>
            <li className="hover: cursor-pointer hover:text-[#2acfcf]">
              Contact
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-[1.125rem] mt-[-0.25rem]">
        <AiFillFacebook className="text-3xl hover:cursor-pointer hover:text-[#2acfcf]" />
        <AiFillTwitterSquare className="text-3xl hover:cursor-pointer hover:text-[#2acfcf]" />
        <FaPinterestSquare className="text-[1.625rem] hover:cursor-pointer hover:text-[#2acfcf]" />
        <AiFillInstagram className="text-3xl hover:cursor-pointer hover:text-[#2acfcf]" />
      </div>
    </footer>
  );
};

export default Footer;
