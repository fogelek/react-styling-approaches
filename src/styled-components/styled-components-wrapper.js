import React, { useEffect, useState } from "react";
import JS from "./js.txt";
import Highlight from "react-highlight";
import { StyledComponents } from "./styled-components";

export const StyledComponentsWrapper = () => {
  const [js, setJs] = useState("");

  useEffect(() => {
    fetch(JS)
      .then((res) => res.text())
      .then((text) => setJs(text));
  }, []);
  return (
    <>
      <StyledComponents />
      <div className="js_code">
        <h3>Javascript</h3>
        <Highlight className="language-jsx">{js}</Highlight>
      </div>
      <div className="css_code">
        <h3>CSS</h3>
        <span className="no-code">No code</span>
      </div>
    </>
  );
};
