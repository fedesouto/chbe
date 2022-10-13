import React, { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../api/Sessions/Sessions";
import { useUser } from "../../contexts/UserContext";
import { Bars } from "react-loader-spinner";

const LoginForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<object>({});
  const { setUser } = useUser();
  const inputs = [
    { name: "username", type: "string" },
    { name: "password", type: "password" }
  ];
  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      await login(userData, setUser);
      setIsLoading(false)
      Swal.fire({ title: "Welcome back!", timer: 2000 }).then((result) =>
        navigate("/user")
      );
    } catch (error) {
      setIsLoading(false)
      Swal.fire({
        title: "Ocurrió un error",
        icon: "error",
        text: `Error: ${error}`,
      });
    }
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>login</h1>
      <form className="product-form">
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
        <button className="btn btn-primary" onClick={handleSubmit}>
          {isLoading ? (
            <Bars
              height="25"
              width="80"
              color="#ffffff"
              ariaLabel="bars-loading"
              wrapperStyle={{justifyContent: 'center'}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Login"
          )}
        </button>
        <Link
          to="/signup"
          style={{ textDecoration: "underline", marginTop: "1rem" }}
        >
          Click here to register.
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
