import React from "react";
import { VanillaWrapper } from "./vanilla-css/vanilla-wrapper";
import { StyledComponentsWrapper } from "./styled-components/styled-components-wrapper";
import { CssModulesWrapper } from "./css-modules/css-modules-wrapper";
import { GriffelWrapper } from "./griffel/griffel-wrapper";

export const App = () => {
  return (
    <div className="container">
      <input type="radio" name="selector" value="css" id="selector_css" />
      <label for="selector_css">Vanilla CSS</label>
      <input type="radio" name="selector" value="styled" id="selector_styled" />
      <label for="selector_styled">Styled Components</label>
      <input
        type="radio"
        name="selector"
        value="modules"
        id="selector_modules"
      />
      <label for="selector_modules">CSS Modules</label>
      <input
        type="radio"
        name="selector"
        value="griffel"
        id="selector_griffel"
      />
      <label for="selector_griffel">Griffel</label>
      <div className="css">
        <VanillaWrapper />
      </div>
      <div className="styled">
        <StyledComponentsWrapper />
      </div>
      <div className="modules">
        <CssModulesWrapper />
      </div>
      <div className="griffel">
        <GriffelWrapper />
      </div>
    </div>
  );
};
