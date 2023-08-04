import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

import { ILink } from "./interfaces/ILink";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
