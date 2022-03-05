import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSend,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { IMessageObject, ISendMessage } from "../../interfaces/IMessage";

import { Container } from "./styles";

import Message from "../../components/molecules/Message";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import useChat from "../../hooks/useChat";

const ChatPage: React.FC = () => {
  const { user, room } = useParams();
  const [newMessage, setNewMessage] = useState<ISendMessage>(
    {} as ISendMessage
  );
  const { messages, sendMessage } = useChat(user, room);

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage({} as ISendMessage);
  };

  return (
    <Container>
      <div className="container-chat">
        <div className="top-bar">
          <AiOutlineHome size={20} />
          <h3>{room?.toUpperCase()}</h3>
          <AiOutlineCaretDown size={20} />
        </div>
        <div className="container-messages">
          {messages.map((message: IMessageObject, idx: number) => (
            <Message
              ownedByCurrentUser={message.ownedByCurrentUser}
              text={message.body}
              key={idx}
            ></Message>
          ))}
        </div>
        <div className="down-bar">
          <Input
            placeholder="Type message..."
            value={newMessage.body?.toString()}
            onChange={(e) =>
              setNewMessage((message: any) => {
                message.body = e.target.value;
                message.room = room;
                return message;
              })
            }
          />
          <Button onClick={handleSendMessage}>
            <AiOutlineSend size={28} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ChatPage;
