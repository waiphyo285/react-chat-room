import styled from "styled-components";

export const Container = styled.button<{ bg?: string; borderRadius?: string }>`
  background: ${(props) => (props.bg ? props.bg : "#fff")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "#fff"};
  margin: 10px 0;
  .link {
    color: #9999ff;
    text-decoration: none;
  }
`;
