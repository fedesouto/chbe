import React, { useEffect, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/Sessions/Sessions";
import { useUser } from "../../contexts/UserContext";
import { Bars } from "react-loader-spinner";

const UserPanel: FunctionComponent = () => {
  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    const data = await logout();
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      setIsLoading(false);
    }
  }, []);
  if (isLoading)
    return (
      <Bars
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="bars-loading"
        wrapperStyle={{justifyContent:'center', marginTop: '5rem'}}
        wrapperClass=""
        visible={true}
      />
    );
  return (
    <div style={{ margin: "2rem" }}>
      <div className="rows">
        <div className="image-wrapper">
          <img src={user.avatar} alt={user.name} />
        </div>
        <h1 style={{ fontSize: "1.75rem" }}>{user.name}</h1>
      </div>
      <div className="user-details">
        <ul>
          <li>e-mail: {user.username}</li>
          <li>address: {user.address}</li>
          <li>email: {user.email}</li>
          <li>age: {user.age}</li>
        </ul>
      </div>
      <button
        className="btn btn-danger"
        style={{ marginTop: "2rem", padding: "1rem", fontSize: "1rem" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserPanel;
