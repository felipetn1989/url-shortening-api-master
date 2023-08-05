import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ILink } from "../interfaces/ILink";

type Props = {
  linksArr: ILink[];
  setLinksArr: React.Dispatch<React.SetStateAction<ILink[]>>;
};

const LinkResult = ({ linksArr, setLinksArr }: Props) => {
  function copyLink(obj: ILink) {
    obj.copyStatus = true;
    setLinksArr([...linksArr, obj]);
  }

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
          <div className="px-4">
            <button
              className={`${
                linkObject.copyStatus ? "bg-[#3b3054]" : "bg-[#2acfcf]"
              } text-white w-full py-2 rounded-lg`}
              onClick={() => copyLink(linkObject)}
            >
              {linkObject.copyStatus ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkResult;
