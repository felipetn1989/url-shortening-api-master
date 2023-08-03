import React from "react";
import StartButton from "../components/StartButton";

import working from "../images/illustration-working.svg";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="text-center overflow-hidden px-4">
      <div className="min-w-[31rem]">
        <img
          className="translate-x-2 translate-y-[-0.125rem]"
          src={working}
          alt="Drawing of a person working on a computer on a desk"
        />
      </div>
      <div className="mt-9 grid gap-3.5">
        <h1 className="text-[2.5rem] font-bold leading-[3rem]">
          More than just shorter links
        </h1>
        <p className="text-[#bfbfbf] text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <StartButton />
      </div>
      <div>INSERT FORM</div>
    </main>
  );
};

export default Main;
