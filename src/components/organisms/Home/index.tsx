import React from "react";

import { Container } from "./styles";
import Profile from "../../molecules/Profile";
import Feed from "../../molecules/Feed";

const Home: React.FC = () => {
  return (
    <Container className="container row">
      <div className="left col-md-4 my-4">
        <Profile />
      </div>
      <div className="right col-md-8 my-4">
        <Feed />
      </div>
    </Container>
  );
};

export default Home;
