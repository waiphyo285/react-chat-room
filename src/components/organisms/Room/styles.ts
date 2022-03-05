import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 350px;
  min-width: 320px;
  /* background:#fff; */
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  backdrop-filter: blur(5px);

  justify-content: space-evenly;

  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07); */
`;
