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
`;
