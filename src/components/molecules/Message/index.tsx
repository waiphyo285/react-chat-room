import React from "react";
import { Container } from "./styles";
import { IMessage } from "../../../interfaces/IMessage";

const Message: React.FC<IMessage> = ({ text, ownedByCurrentUser }) => {
  return (
    <Container
      className={ownedByCurrentUser ? "message right sb1" : "message left sb2"}
    >
      {text}
    </Container>
  );
};

export default Message;
