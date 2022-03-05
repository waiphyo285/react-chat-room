import styled from "styled-components";

export const Container = styled.input`
  width: 80%;
  border: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  color: #ffff;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ffff;
    opacity: 1; /* Firefox */
  }
`;
