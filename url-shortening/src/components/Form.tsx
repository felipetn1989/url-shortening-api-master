import React, { ChangeEvent, FormEvent, useState } from "react";

import styles from "./Form.module.css";
import { spawn } from "child_process";

import { ILink } from "../interfaces/ILink";

type Props = {};

const Form = (props: Props) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [linksArr, setLinksArr] = useState<ILink[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
  }

  function shortenLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowError(!link);

    if (!link) return;

    const shortLink = `short test: ${link}`;

    if (linksArr.length === 3) linksArr.shift();

    setLinksArr([...linksArr, { link: link, shortLink: shortLink }]);
  }

  return (
    <div>
      <form
        className={`${styles.form} mt-[5.5rem] p-6 grid place-content-center gap-4 rounded-lg z-40`}
        onSubmit={shortenLink}
      >
        <label htmlFor="linkInput">
          <input
            className={`w-[17.5rem] h-12 pl-4 rounded-lg ${
              showError
                ? "placeholder:text-[#f46262] border border-[#f46262]"
                : "placeholder:text-[#bfbfbf]"
            }`}
            type="text"
            name="linkInput"
            id="linkInput"
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
        </label>
        {showError && (
          <span className="text-left text-[#f46262] text-[0.6875rem]">
            Please add a link
          </span>
        )}
        <input
          className="bg-[#2acfcf] text-white font-bold w-[17.5rem] h-12 rounded-lg text-lg hover:cursor-pointer hover:opacity-50"
          type="submit"
          value="Shorten It!"
        />
      </form>
      {linksArr?.map((linkObject, index) => (
        <div key={index}>
          <h2>{linkObject?.link}</h2>
          <p>{linkObject?.shortLink}</p>
          <button>Copy</button>
        </div>
      ))}
    </div>
  );
};

export default Form;
