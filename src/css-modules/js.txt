import React from "react";
import { Button, Text } from "@fluentui/react-components";
import styles from "./css-modules.module.scss";

export const CssModules = () => {
  return (
    <div className={styles.sourceContainer}>
      <Text as="h3">CSS Modules</Text>
      <input type="text" />
      <Button>I'm a button!</Button>
      <ul>
        <li>Item 1</li>
        <li className={styles.selected}>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};
