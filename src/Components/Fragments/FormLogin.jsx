import InputForm from "../Elements/Input /index.jsx";
import Button from "../Elements/Button/index.jsx";
import { useRef } from "react";
import { useEffect } from "react";
import { login } from "../../services/auth.service.js";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const HandleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
    // console.log(usernameRef.current);
  }, []);

  return (
    <form onSubmit={HandleLogin}>
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="john Doe"
        ref={usernameRef}
      />
      {/* ------- */}
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="**********"
      />
      {loginFailed && (
        <p className="text-blue-600 text-center">{loginFailed}</p>
      )}
      <Button className="bg-red-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
