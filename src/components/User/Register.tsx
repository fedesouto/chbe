import React, { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../../api/Sessions/Sessions";
import { useUser } from "../../contexts/UserContext";

const RegisterForm: FunctionComponent = () => {
  const [userData, setUserData] = useState<object>({});
  const navigate = useNavigate()
  const {setUser} = useUser()
  const inputs = [
    { name: "username", type: "email" },
    { name: "password", type: "password" },
    { name: "name", type: "text" },
    { name: "age", type: "text" },
    { name: "phone", type: "text" },
    { name: "address", type: "text" },
    { name: "avatar", type: "url" },
  ];
  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await register(userData, setUser)
    Swal.fire({title: "Welcome to CHBE!", timer: 2000}).then((result) => navigate('/user'))
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>sign up</h1>
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
        <input className="btn btn-primary" type="submit" value="Register" />
        <Link
          to="/login"
          style={{ textDecoration: "underline", marginTop: "1rem" }}
        >
          Click here to login.
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
