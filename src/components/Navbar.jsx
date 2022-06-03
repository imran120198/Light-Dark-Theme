import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Box = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
`;

export default function Navbar() {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);
  const currentTheme = themeData[theme];

  return (
    <Box
      style={{ color: currentTheme.color, background: currentTheme.background }}
    >
      <Button
        onClick={toggleTheme}
        style={{
          color: currentTheme.color,
          background: currentTheme.background,
        }}
      >
        {theme === "light" ? "light" : "Dark"} mode
      </Button>
    </Box>
  );
}
