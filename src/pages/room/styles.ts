import styled from "styled-components";
import bg from "../../assets/bg-theme.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;

  input {
    border-color: hsl(0, 0%, 80%);
    /* border-radius: 4px; */
    border-style: solid;
    border-width: 1px;
  }
`;
