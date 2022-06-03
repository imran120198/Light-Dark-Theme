import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContextProvider";

const Foot = styled.footer`
  width: 90%;
  border: 5px solid black;
  margin:auto;
  margin-top:30px;
  background: aqua;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10%;
  text-align: center;
`;

export default function Footer() {
  const [{ theme, themeData }] = useContext(ThemeContext);
  const currentTheme = themeData[theme];

  return (
    <Foot
      style={{
        color: currentTheme.color,
        background: currentTheme.background,
      }}
    >
      <h1>Footer</h1>
      <img src="https://img.icons8.com/nolan/50/react-native.png" />
      <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" />
      <h3>React Assignment</h3>
      <h3>Copyright to Imran</h3>
    </Foot>
  );
}
