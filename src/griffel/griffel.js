import React from "react";
import { Button, Text } from "@fluentui/react-components";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    rowGap: "8px",
  },
  input: {
    width: "min(200px, 20vw)",
    boxShadow: "var(--input-shadow)",
    ...shorthands.borderStyle("none"),
    ...shorthands.padding("4px"),
    ...shorthands.borderRadius("5px"),
  },
  button: {
    width: "200px",
    transition: "transform var(--transition-time) ease",
    "&:hover": {
      transform: "scale(var(--button-hover-scale))",
    },
  },
  list: {
    ...shorthands.padding("0px"),
  },
  listItem: {
    listStyleType: "none",
    marginLeft: 0,
    boxShadow: "var(--item-shadow)",
    cursor: "pointer",
    ...shorthands.padding("5px", "15px"),
    ...shorthands.border("1px", "solid", "#0004"),
    ...shorthands.borderRadius("5px"),
    "&:hover": {
      boxShadow: "var(--item-shadow-hover)",
    },
    "&:not(:first-of-type)": {
      marginTop: "8px",
    },
  },
  selected: {
    backgroundColor: "#0004",
  },
});

export const Griffel = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Text as="h3">Griffel</Text>
      <input className={styles.input} type="text" />
      <Button className={styles.button}>I'm a button!</Button>
      <ul className={styles.list}>
        <li className={styles.listItem}>Item 1</li>
        <li className={mergeClasses(styles.listItem, styles.selected)}>
          Item 2
        </li>
        <li className={styles.listItem}>Item 3</li>
      </ul>
    </div>
  );
};
