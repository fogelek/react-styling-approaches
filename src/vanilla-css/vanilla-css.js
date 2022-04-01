import React from "react";
import "./vanilla-css.scss";
import { Button, Text } from "@fluentui/react-components";

export const VanillaCss = () => {
  return (
    <div className="sourceContainer">
      <Text as="h3">Vanilla CSS</Text>
      <input type="text" />
      <Button>I'm a button!</Button>
      <ul>
        <li>Item 1</li>
        <li className="selected">Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};
