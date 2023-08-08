import React, { ChangeEvent, FormEvent } from "react";

import styles from "./Form.module.css";

type Props = {
  shortenLink(e: FormEvent<HTMLFormElement>): void;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  showError: boolean;
  isValid: boolean;
};

const Form = ({ shortenLink, setLink, showError, isValid }: Props) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
  }

  return (
    <div className="lg:w-[79.6%] lg:m-auto">
      <form
        className={`${styles.form} mt-[5.5rem] p-6 grid place-content-center gap-4 rounded-lg lg:flex lg:py-[3.25rem] lg:mt-[5rem] lg:px-16 lg:gap-6`}
        onSubmit={shortenLink}
      >
        <div className="flex flex-col lg:w-full">
          <label htmlFor="linkInput">
            <input
              className={`w-full max-w-[17.5rem] h-12 pl-4 rounded-lg ${
                showError || !isValid
                  ? "placeholder:text-[#f46262] border border-[#f46262]"
                  : "placeholder:text-[#bfbfbf]"
              } lg:max-w-[unset] lg:h-16 lg:placeholder:text-lg lg:pl-8 lg:placeholder:tracking-wider`}
              type="text"
              name="linkInput"
              id="linkInput"
              placeholder="Shorten a link here..."
              onChange={handleChange}
            />
          </label>
          {showError && (
            <span className="text-left text-[#f46262] text-[0.75rem]">
              Please add a link
            </span>
          )}
          {!isValid && (
            <span className="text-left text-[#f46262] text-[0.75rem]">
              Invalid link
            </span>
          )}
        </div>
        <input
          className="bg-[#2acfcf] text-white font-bold max-w-[17.5rem] h-12 rounded-lg text-lg hover:cursor-pointer hover:opacity-50 lg:h-16 lg:max-w-[unset] lg:w-60 lg:text-xl"
          type="submit"
          value="Shorten It!"
        />
      </form>
    </div>
  );
};

export default Form;
