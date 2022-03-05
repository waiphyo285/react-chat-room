import styled from "styled-components";

export const Container = styled.div`
  .message {
    width: 46%;
    padding: 10px;
    margin: 5px auto;
    color: #ffff;
    background: #4280ff;
    position: relative;
    &.sb1:before {
      content: "";
      width: 0px;
      height: 0px;
      top: 0px;
      right: -10px;
      position: absolute;
      border-top: 5px solid #4280ff;
      border-right: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid #4280ff;
      border-radius: 0px 5px 5px 0;
    }
    &.sb2:before {
      content: "";
      width: 0px;
      height: 0px;
      top: 0px;
      left: -10px;
      position: absolute;
      border-top: 5px solid #30ba83;
      border-right: 5px solid #30ba83;
      border-bottom: 5px solid transparent;
      border-left: 5px solid transparent;
    }
    &.left {
      margin-left: 10px;
      background-color: #30ba83;
      border-radius: 0px 10px 10px 10px;
    }
    &.right {
      align-self: flex-end;
      margin-right: 10px;
      border-radius: 10px 0px 10px 10px;
    }
  }
`;
