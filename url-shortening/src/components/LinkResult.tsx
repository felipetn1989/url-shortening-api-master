import React, { useState } from "react";

import 

import { ILink } from "../interfaces/ILink";

type Props = {
  linksArr: ILink[];
};

const LinkResult = ({ linksArr }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="space-y-[1.625rem] px-2 mt-[-3rem]">
      {linksArr?.map((linkObject, index) => (
        <div
          key={index}
          className="grid text-left bg-white pt-3 pb-4 rounded-lg"
        >
          <h2 className="text-[#35323e] border-b px-4 pb-3">
            {linkObject?.link}
          </h2>
          <a
            className="px-4 py-3 text-[#2acfcf]"
            href={`${linkObject.shortLink}`}
            target="_blank"
          >
            {linkObject.shortLink}
          </a>
         <CopyToClipboard>

         </CopyToClipboard>
            <button
              className={`${
                copied ? "bg-[#3b3054]" : "bg-[#2acfcf]"
              } text-white w-full py-2 rounded-lg`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          
        </div>
      ))}
    </div>
  );
};

export default LinkResult;
