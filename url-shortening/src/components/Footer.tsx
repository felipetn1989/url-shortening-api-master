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

            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </li>
        <li>
          <ul className="space-y-[0.9375rem]">
            <li className="font-bold text-white text-base pb-1.5">Resources</li>

            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </li>
        <li>
          <ul className="space-y-[0.9375rem]">
            <li className="font-bold text-white text-base pb-1.5">Company</li>

            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-[1.125rem] mt-[-0.25rem]">
        <AiFillFacebook className="text-3xl hover:cursor-pointer" />
        <AiFillTwitterSquare className="text-3xl hover:cursor-pointer" />
        <FaPinterestSquare className="text-[1.625rem] hover:cursor-pointer" />
        <AiFillInstagram className="text-3xl hover:cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
