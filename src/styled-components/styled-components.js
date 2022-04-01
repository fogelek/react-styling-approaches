import React from "react";
import { Button as FluentButton, Text } from "@fluentui/react-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  width: Min(200px, 20vw);
  padding: 4px;
  box-shadow: var(--input-shadow);
  border: none;
  border-radius: 5px;
`;

const Button = styled(FluentButton)`
  width: Min(200px, 20vw);
  transition: transform var(--transition-time) ease;

  &:hover {
    transform: scale(var(--button-hover-scale));
  }
`;

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin-left: 0;
  padding: 5px 15px;
  border: 1px solid #0004;
  box-shadow: var(--item-shadow);
  border-radius: 5px;
  cursor: pointer;

  &.selected {
    background-color: #0004;
  }

  &:hover {
    box-shadow: var(--item-shadow-hover);
  }

  + li {
    margin-top: 8px;
  }
`;

export const StyledComponents = () => {
  return (
    <Container>
      <Text as="h3">Styled Components</Text>
      <Input type="text" />
      <Button>I'm a button!</Button>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem className="selected">Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </Container>
  );
};
