import React, { useEffect, useState } from "react";
import JS from "./js.txt";
import Highlight from "react-highlight";
import CSS from "../vanilla-css/css.txt";
import { CssModules } from "./css-modules";

export const CssModulesWrapper = () => {
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
      <CssModules />
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
