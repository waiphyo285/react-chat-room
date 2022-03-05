import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../routes/auth";
import { signUp, signIn } from "../../../api/request";
import { Container } from "./styles";

import Input from "../../atoms/Input";
import logo from "../../../assets/logo.svg";

const RegisterForm: React.FC = () => {
  const [fullname, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [respData, setRespData] = useState<any>(null);

  const auth = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const prevUrl: any = location.state;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await signUp({ fullname, username, password });
      data.status === "SUCCESS" ? setRespData(data.data) : setRespData(null);
    } catch (error: any) {
      console.log("Error found: ", error);
    }
  };

  if (respData) {
    auth.signin(respData, () => {
      // prevUrl.from.pathname || "/"
      navigate("/", { replace: true });
    });
  }

  return (
    <Container>
      <img src={logo} width="100px" height="100px" alt="logo" />
      <h3>Sign up</h3>
      <Input
        placeholder="Full Name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <Input
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <span>
        Already have an account? <Link to={`/sign-in`}>Sign In</Link>
      </span>
      <Link to={`/`} className="link btn btn-light" onClick={handleSubmit}>
        Sign Up
      </Link>
    </Container>
  );
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [respData, setRespData] = useState<any>(null);

  const auth = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const prevUrl: any = location.state;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await signIn({ username, password });
      data.status === "SUCCESS" ? setRespData(data.data) : setRespData(null);
    } catch (error: any) {
      console.log("Error found: ", error);
    }
  };

  if (respData) {
    auth.signin(respData, () => {
      // prevUrl.from.pathname || "/"
      navigate("/", { replace: true });
    });
  }

  return (
    <Container>
      <img src={logo} width="100px" height="100px" alt="logo" />
      <h3>Sign in</h3>
      <Input
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <span>
        If you don't have account? <Link to={`/sign-up`}> Sign Up</Link>
      </span>
      <Link to={`/`} className="link btn btn-light" onClick={handleSubmit}>
        Sign In
      </Link>
    </Container>
  );
};

export { RegisterForm, LoginForm };
