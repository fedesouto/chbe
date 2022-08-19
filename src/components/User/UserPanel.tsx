import React, { useEffect, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const UserPanel: FunctionComponent = () => {
  const [user] = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <div className="rows">
        <div className="image-wrapper">
          <img src={user.image} alt={user.name} />
        </div>
        <h1 style={{ fontSize: "1.75rem" }}>{user.name}</h1>
      </div>
      <div className="user-details">
        <ul>
          <li>e-mail: {user.email}</li>
          <li>address: {user.address}</li>
          <li>phone: {user.phone}</li>
        </ul>
      </div>
      <button
        className="btn btn-danger"
        style={{ marginTop: "2rem", padding: "1rem", fontSize: "1rem" }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserPanel;
