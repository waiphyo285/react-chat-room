import React from "react";
import { Container } from "./styles";
import { RegisterForm, LoginForm } from "../../components/organisms/Auth";

const Register: React.FC = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

const Login: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export { Register, Login };
