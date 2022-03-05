import styled from "styled-components";
import bg from "../../assets/bg-theme.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;

  .container-chat {
    width: 90%;
    height: 100%;
    min-width: 320px;
    .top-bar {
      height: 50px;
      display: flex;
      padding-left: 10px;
      padding-right: 10px;
      align-items: center;
      text-align: center;
      font-weight: 800;
      justify-content: space-between;
      svg {
        fill: #d9dbea;
      }
      div {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4181f6;
        border-radius: 10px;
        svg {
          fill: #ffffff;
        }
      }
    }
    .down-bar {
      display: flex;
      border-radius: 20px;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      bottom: 5px;
      button {
        border: none;
      }
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      width: 90%;
      height: 70px;
      min-width: 320px;
      input {
        border: none;
        padding: 10px;
        border-radius: 10px;
        width: 80%;
      }
      svg {
        fill: #ffff;
      }
    }

    .container-messages {
      top: 50px;
      bottom: 70px;
      width: 90%;
      min-width: 320px;
      padding-right: 5px;
      padding-left: 5px;
      position: absolute;
      display: flex;
      overflow-y: auto;
      flex-direction: column;

      .message {
        width: 46%;
        padding: 10px;
        margin: 5px auto;
        position: relative;
        background: #4280ff;

        &.sb1:before {
          content: "";
          top: 0px;
          right: -10px;
          width: 0px;
          height: 0px;
          position: absolute;
          border-radius: 0px 5px 5px 0;
          border-top: 5px solid #4280ff;
          border-right: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid #4280ff;
        }
        &.sb2:before {
          content: "";
          top: 0px;
          left: -10px;
          width: 0px;
          height: 0px;
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
    }
  }
`;
