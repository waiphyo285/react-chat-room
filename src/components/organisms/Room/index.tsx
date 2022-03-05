import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { getUser } from "../../../routes/auth";
import { createRoom } from "../../../api/request";
import { appSocket } from "../../../api/socket";

import Input from "../../atoms/Input";
import logo from "../../../assets/logo.svg";

const RoomForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [respData, setRespData] = useState<any>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    // appSocket.emit(
    //   "selected_room",
    //   {
    //     room,
    //     user,
    //   },
    //   (response: any) => {
    //     localStorage.setItem("@auth/user", response.user);
    //   }
    // );
    e.preventDefault();
    try {
      const authUser: any = getUser();
      const parseUser: any = JSON.parse(authUser);
      const { data } = await createRoom({
        name,
        description,
        userid: parseUser._id,
      });
      data.status === "SUCCESS" ? setRespData(data.data) : setRespData(null);
    } catch (error: any) {
      console.log("Error found: ", error);
    }
  };

  if (respData) {
    navigate("/", { replace: true });
  }

  return (
    <Container>
      <img src={logo} width="100px" height="100px" alt="logo" />
      <h3>Create Room</h3>
      <Input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <Link to={`/`} className="link btn btn-light" onClick={handleSubmit}>
        Create
      </Link>
    </Container>
  );
};

export default RoomForm;
