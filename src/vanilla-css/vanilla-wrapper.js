import React, { useEffect, useState } from "react";
import { VanillaCss } from "./vanilla-css";
import CSS from "./css.txt";
import JS from "./js.txt";
import Highlight from "react-highlight";

export const VanillaWrapper = () => {
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    fetch(CSS)
      .then((res) => res.text())
      .then((text) => setCss(text));
    fetch(JS)
      .then((res) => res.text())
      .then((text) => setJs(text));
  }, []);
  return (
    <>
      <VanillaCss />
      <div className="js_code">
        <h3>Javascript</h3>
        <Highlight className="language-jsx">{js}</Highlight>
      </div>
      <div className="css_code">
        <h3>CSS</h3>
        <Highlight className="language-scss">{css}</Highlight>
      </div>
    </>
  );
};
