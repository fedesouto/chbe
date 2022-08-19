import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm: FunctionComponent = () => {
  const [userData, setUserData] = useState<object>({});
  const inputs = [
    { name: "email", type: "email" },
    { name: "password", type: "password" }
  ];
  const handleChange = (event: { target: { name: any; value: any } }) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(userData)
    Swal.fire({ text: "Welcome back to CHBE!" });
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
