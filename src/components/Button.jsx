import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContextProvider";

const ButtonStyle = styled.button`
  padding: 10px;
  font-size: 20px;
`;

export default function Button({ title }) {
  const [{ theme, themeData }] = useContext(ThemeContext);
  const currentTheme = themeData[theme];

  return (
    <ButtonStyle
      style={{
        color: currentTheme.color,
        background: currentTheme.background,
      }}
    >
      {title}
    </ButtonStyle>
  );
}
