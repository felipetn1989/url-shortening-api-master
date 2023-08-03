import React from "react";

import styles from "./Form.module.css";

type Props = {};

const Form = (props: Props) => {
  return (
    <form
      className={`${styles.form} mt-[5.5rem] p-6 grid place-content-center gap-4 rounded-lg z-40`}
    >
      <label htmlFor="linkInput">
        <input
          className="w-[17.5rem] h-12 pl-4 rounded-lg"
          type="text"
          name="linkInput"
          id="linkInput"
          placeholder="Shorten a link here..."
        />
      </label>
      <input
        className="bg-[#2acfcf] text-white font-bold w-[17.5rem] h-12 rounded-lg text-lg hover:cursor-pointer hover:opacity-50"
        type="submit"
        value="Shorten It!"
      />
    </form>
  );
};

export default Form;
