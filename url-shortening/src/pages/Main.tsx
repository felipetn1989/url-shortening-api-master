import React, { useState, FormEvent, useEffect } from "react";
import styles from "./Main.module.css";

import working from "../images/illustration-working.svg";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";

import StartButton from "../components/StartButton";
import Form from "../components/Form";

import { ILink } from "../interfaces/ILink";
import LinkResult from "../components/LinkResult";

type Props = {};

const Main = (props: Props) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [link, setLink] = useState<string>("");
  const [linksArr, setLinksArr] = useState<ILink[]>([]);

  async function getShortLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowError(!link);

    if (!link) return;

    try {
      const resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const data = await resp.json();

      setIsValid(!!data.result);

      const linkResult = await data.result.full_short_link;

      if (linksArr.length === 3) linksArr.shift();

      const newLinkObj = {
        link: link,
        shortLink: linkResult,
        copyStatus: false,
      };

      setLinksArr([...linksArr, newLinkObj]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className={`text-center overflow-hidden lg:mt-[2.3125rem]`}>
      <div className="px-4 text-[#35323e] xl:flex xl:flex-row-reverse lg:px-0 lg:py-[3.625rem]">
        <div className="min-w-[31rem]">
          <img
            className="translate-x-2 translate-y-[-0.125rem] m-auto xl:absolute xl:translate-x-[-7rem] xl:translate-y-[-4.5rem]"
            src={working}
            alt="Drawing of a person working on a computer on a desk"
          />
        </div>
        <div className="mt-9 grid gap-3.5 lg:pl-[10.5rem] lg:text-left lg:gap-2 lg:m-auto">
          <h1 className="text-[2.5rem] font-bold leading-[3rem] lg:text-[5rem] lg:leading-[5.3125rem] lg:tracking-tight">
            More than just shorter links
          </h1>
          <p className="text-[#bfbfbf] text-lg lg:text-[1.3125rem] lg:pr-56 lg:leading-[2.0625rem] lg:tracking-wide">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <StartButton />
        </div>
      </div>
      <div className="relative px-6 z-40">
        <Form
          shortenLink={getShortLink}
          setLink={setLink}
          showError={showError}
          isValid={isValid}
        />
      </div>
      <div className="bg-[#f0f1f6] translate-y-[-5rem] pt-[9.5625rem] grid gap-4 px-4 text-[#9e9aa7] pb-20 lg:translate-y-[-5.25rem] lg:pt-[11.6875rem] lg:gap-3.5 lg:pb-[12.5rem]">
        <LinkResult linksArr={linksArr} setLinksArr={setLinksArr} />
        <h2 className="text-[1.6875rem] font-bold text-[#35323e] lg:text-[2.375rem]">
          Advanced Statistics
        </h2>
        <p className="leading-[1.75rem] lg:text-lg lg:w-[33rem] lg:m-auto lg:leading-[1.9375rem]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="mt-[4.625rem] px-2 grid gap-[5.5rem] lg:flex lg:px-[9.4375rem] lg:gap-x-[2rem] lg:text-left lg:mt-[5.25rem] lg:max-w-[90rem] lg:m-auto">
          <div className="relative bg-white px-7 pb-[2.375rem] rounded-lg lg:px-7">
            <img
              className="m-auto bg-[#3b3054] p-6 w-[5.5rem] rounded-full translate-y-[-2.75rem] mb-[-0.75rem] lg:m-[unset]"
              src={brand}
              alt=""
            />
            <div className="mt-[-0.75rem]">
              <h3 className="text-[1.3125rem] tracking-wide font-bold text-[#35323e]">
                Brand Recognition
              </h3>
              <p className="text-[0.9375rem] mt-[1.125rem] leading-[1.625rem]">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="absolute bottom-[-4rem] left-[50%] translate-x-[-50%] w-2 h-16 bg-[#2acfcf] lg:w-16 lg:h-2 lg:bottom-[6.9375rem] lg:left-[unset] lg:right-[-6rem]"></div>
          </div>
          <div className="relative bg-white px-7 pb-[1.9375rem] rounded-lg translate-y-1 lg:px-7 lg:translate-y-11">
            <img
              className="m-auto bg-[#3b3054] p-6 w-[5.5rem] rounded-full translate-y-[-2.75rem] mb-[-0.75rem] lg:m-[unset]"
              src={records}
              alt=""
            />
            <div className="mt-[-0.75rem]">
              <h3 className="text-[1.3125rem] tracking-wide font-bold text-[#35323e]">
                Detailed Records
              </h3>
              <p className="text-[0.9375rem] mt-[1.125rem] leading-[1.625rem] lg:w-[97%]">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="absolute bottom-[-4rem] left-[50%] translate-x-[-50%] w-2 h-16 bg-[#2acfcf] lg:w-16 lg:h-2 lg:left-[unset] lg:right-[-6rem] lg:bottom-[9.75rem]"></div>
          </div>
          <div className="bg-white px-7 pb-[2.375rem] rounded-lg mt-[0.4375rem] lg:px-8 lg:translate-y-[5.25rem] lg:translate-x-[-0.5rem]">
            <img
              className="m-auto bg-[#3b3054] p-6 w-[5.5rem] rounded-full translate-y-[-2.75rem] mb-[-0.75rem] lg:m-[unset]"
              src={custom}
              alt=""
            />
            <div className="mt-[-0.75rem]">
              <h3 className="text-[1.3125rem] tracking-wide font-bold text-[#35323e]">
                Fully Customizable
              </h3>
              <p className="text-[0.9375rem] mt-[1rem] leading-[1.625rem]">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mt-[-5rem] pt-24 pb-[5.5625rem] ${styles["boost"]} lg:pt-14 lg:pb-14`}
      >
        <h2 className="text-white font-bold text-[1.675rem] lg:text-[2.375rem] lg:mb-[-0.5rem]">
          Boost your links today
        </h2>
        <StartButton />
      </div>
    </main>
  );
};

export default Main;
