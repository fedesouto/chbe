import React, { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../api/Sessions/Sessions";
import { useUser } from "../../contexts/UserContext";

const LoginForm: FunctionComponent = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<object>({});
  const {setUser} = useUser()
  const inputs = [
    { name: "username", type: "email" },
    { name: "password", type: "password" }
  ];
  const handleChange = (event: { target: { name: any; value: any } }) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await login(userData, setUser)
    Swal.fire({title: "Welcome back!", timer: 2000}).then((result) => navigate('/user'))
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>login</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        {inputs.map(({ name, type }) => {
          return (
            <div className="input-group" key={name}>
              <label htmlFor={`input-${name}`}>{name}</label>
              <input
                required
                onChange={handleChange}
                id={`input-${name}`}
                name={name}
                type={type}
              />
            </div>
          );
        })}
        <input
          className="btn btn-primary"
          type="submit"
          value="Login"
        />
      <Link to="/signup" style={{textDecoration: 'underline', marginTop:'1rem'}}>Click here to register.</Link>
      </form>
    </div>
  );
};

export default LoginForm;
