import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getRoomList } from "../../../api/request";
import { getUser } from "../../../routes/auth";
import { Container } from "./styles";

const Feed: React.FC = () => {
  const [respData, setRespData] = useState<any>([]);

  const authUser: any = getUser();
  const parseUser: any = JSON.parse(authUser);

  const fetchData = () => {
    getRoomList({})
      .then((result: any) => {
        result.data.status === "SUCCESS"
          ? setRespData(result.data.data)
          : setRespData([]);
      })
      .catch((error: any) => {
        console.log("Error found: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {respData?.map((room: any, idx: any) => (
        <Link key={idx} to={`/${room._id}/${parseUser._id}`} className="link">
          <div className="card">
            <img
              src={"https://via.placeholder.com/300x100.png"}
              className="img"
              alt="Cover"
            />
            <div className="card-body text-dark">
              <h5 className="card-title">{room.name}</h5>
              <p className="card-text">
                {!room.status ? (
                  <small className="text-success">Active</small>
                ) : (
                  <small className="text-danger">Inactive</small>
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Feed;
