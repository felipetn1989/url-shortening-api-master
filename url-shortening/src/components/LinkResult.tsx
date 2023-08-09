import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ILink } from "../interfaces/ILink";

type Props = {
  linksArr: ILink[];
  setLinksArr: React.Dispatch<React.SetStateAction<ILink[]>>;
};

const LinkResult = ({ linksArr, setLinksArr }: Props) => {
  function copyLink(obj: ILink) {
    setLinksArr(
      linksArr.map((linkObject) =>
        linkObject.shortLink === obj.shortLink
          ? { ...linkObject, copyStatus: true }
          : linkObject
      )
    );
  }

  return (
    <div
      className={`space-y-[1.625rem] px-2 mt-[-3rem] lg:space-y-3 lg:mt-[-5rem] ${
        linksArr.length && "lg:mb-[6.5rem]"
      }`}
    >
      {linksArr?.map((linkObject, index) => (
        <div
          key={index}
          className="grid text-left bg-white pt-3 pb-4 rounded-lg lg:flex lg:items-center lg:justify-between lg:w-[80%] lg:m-auto lg:max-w-[70rem] lg:px-4 lg:py-3"
        >
          <h2 className="text-[#35323e] border-b px-4 pb-3 lg:border-none lg:text-xl lg:pb-[unset]">
            {linkObject?.link}
          </h2>
          <div className="mt-3 lg:flex lg:mt-[unset] lg:items-center">
            <a
              className="px-4 py-3 text-[#2acfcf] lg:text-xl"
              href={`${linkObject.shortLink}`}
              target="_blank"
              rel="noreferrer"
            >
              {linkObject.shortLink}
            </a>
            <div className="px-4">
              <CopyToClipboard
                text={linkObject.shortLink}
                onCopy={() => copyLink(linkObject)}
              >
                <button
                  className={`${
                    linkObject.copyStatus ? "bg-[#3b3054]" : "bg-[#2acfcf]"
                  } text-white w-full py-2 rounded-lg mt-3 lg:px-8 lg:translate-x-1.5 lg:text-[0.9375rem] lg:mt-[unset] hover:opacity-30`}
                >
                  {linkObject.copyStatus ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkResult;
