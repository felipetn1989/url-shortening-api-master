import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ILink } from "../interfaces/ILink";

type Props = {};

const LinkResult = (props: Props) => {
  const [linksArr, setLinksArr] = useState<ILink[]>([]);

  async function getData() {
    try {
      const resp = await fetch("http://localhost:5000/links", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setLinksArr(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  },[linksArr])

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
            <CopyToClipboard
              text={linkObject.shortLink}
              onCopy={() => copyLink(linkObject)}
            >
              <button
                className={`${
                  linkObject.copyStatus ? "bg-[#3b3054]" : "bg-[#2acfcf]"
                } text-white w-full py-2 rounded-lg`}
              >
                {linkObject.copyStatus ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkResult;
