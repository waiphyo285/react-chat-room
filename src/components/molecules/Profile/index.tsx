import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../routes/auth";
import { getUser } from "../../../routes/auth";
import { Container } from "./styles";

const Profile: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const authUser: any = getUser();
  const parseUser: any = JSON.parse(authUser);

  const handleSingOut = async (e: any) => {
    e.preventDefault();
    auth.signout(() => {
      // prevUrl.from.pathname || "/"
      navigate("/", { replace: true });
    });
  };

  return (
    <Container>
      <div className="card">
        <div className="avatar">
          <img
            src={
              "https://gravatar.com/avatar/babd3c3dc4fc69529d82a007ee2b6d54?s=400&d=robohash&r=x"
            }
            className=" card-img-top"
            alt=""
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{parseUser?.fullname}</h5>
          <div className="card-button my-4">
            <Link to={`/room/#new`} className="btn btn-sm btn-success col-12">
              Create Room
            </Link>
          </div>
          <div className="card-list border my-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item" key={1}>
                My Rooms
              </li>
              <li className="list-group-item" key={2}>
                Public Rooms
              </li>
              <li className="list-group-item" key={3}>
                <Link to={`/`} className="link" onClick={handleSingOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
