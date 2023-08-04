import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

import { ILink } from "./interfaces/ILink";

function App() {
  const [showError, setShowError] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [shortLink, setShortLink] = useState<string>("");
  const [linksArr, setLinksArr] = useState<ILink[]>([]);

  async function shortenLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowError(!link);

    if (!link) return;

    try {
      const resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const data = await resp.json();
      const linkResult = await data.result.full_short_link2;
      setShortLink(linkResult);

      if (linksArr.length === 3) linksArr.shift();

      setLinksArr([...linksArr, { link: link, shortLink: shortLink }]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Header />
      <Main
        shortenLink={shortenLink}
        setLink={setLink}
        showError={showError}
        shortLink={shortLink}
        linksArr={linksArr}
      />
      <Footer />
    </div>
  );
}

export default App;
