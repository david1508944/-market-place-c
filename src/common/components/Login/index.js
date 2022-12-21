import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import Header from "../../header/Header";


import { authRouteChanger, ChangeUser } from "../redux/slices/appSlice";

const Login = () => {
    const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [error, setError] = useState("");
  const handleLogin = ({ username, password }) => {
    fetch("http://localhost:3000/users")
      .then((result) => result.json())
      .then((result) => {
        const user = result.find(
          (item) => item.username === username && item.password === password
        );
        if (!user) {
          setError("Invalid login or password");
        } else {
          dispatch(ChangeUser(user));
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/home");
        }
      });
  };

  return (
    <div className="auth-container">
      <h2 className="authHead">Login</h2>
      <form onSubmit={handleSubmit(handleLogin)} className="auth-form">
        <input
          style={errors.username ? { borderColor: "red" } : { borderColor: "" }}
          className="auth-input"
          type="text"
          placeholder="username"
          {...register("username", {
            required: true,
          })}
        />
        {errors.username && <div className="error">{errors.username.type}</div>}
        <input
          style={errors.password ? { borderColor: "red" } : { borderColor: "" }}
          className="auth-input"
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors.username && <p className="error">{errors.username.type}</p>}
        {error && <p>Invalid login or password</p>}
        <button className="auth-button">Log in</button>
      </form>
      <div className="auth-nav">
        <span>Not Resistered?</span>
        <Link 
        className="auth-link"
        to="/registration">Create an account</Link>
      </div>
    </div>
  );
};
export default Login;
