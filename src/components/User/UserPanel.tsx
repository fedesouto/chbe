import React, { useEffect, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/Sessions/Sessions";
import { useUser } from "../../contexts/UserContext";

const UserPanel: FunctionComponent = () => {
  const {user, setUser} = useUser();
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const handleLogout = async () => {
    const data = await logout()
    setIsLoading(true)
    setUser(null)
    navigate('/login')
  }

  useEffect(() => {
    if (!user) navigate("/login"); 
    else{
      setIsLoading(false)
    }
  }, []);
  if(isLoading) return null
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
          <li>phone: {user.phone}</li>
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
