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
    <div>
      <form
        className={`${styles.form} mt-[5.5rem] p-6 grid place-content-center gap-4 rounded-lg`}
        onSubmit={shortenLink}
      >
        <label htmlFor="linkInput">
          <input
            className={`w-full max-w-[17.5rem] h-12 pl-4 rounded-lg ${
              showError || !isValid
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
          <span className="text-left text-[#f46262] text-[0.75rem] mt-[-0.75rem]">
            Please add a link
          </span>
        )}
        {!isValid && (
          <span className="text-left text-[#f46262] text-[0.75rem] mt-[-0.75rem]">
            Invalid link
          </span>
        )}
        <input
          className="bg-[#2acfcf] text-white font-bold max-w-[17.5rem] h-12 rounded-lg text-lg hover:cursor-pointer hover:opacity-50"
          type="submit"
          value="Shorten It!"
        />
      </form>
    </div>
  );
};

export default Form;
