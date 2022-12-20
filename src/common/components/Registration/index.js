import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import { LOGIN } from "../constants";
import { Link } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = ({ username, email, password }) => {
    // console.log(username, email,password);
    const userInfoObj = {
      username,
      email,
      password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(userInfoObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((result) =>  navigate("/login"));
      
   
  };

  return (
    <div className="auth-container">
      <h2 className="authHead">Create an account</h2>
      <form
       onSubmit={handleSubmit(handleRegistration)} 
       className="auth-form">
        <input
        style={errors.password ? { borderColor: "red" } : { borderColor: "" }}
          className="auth-input"
           type="text"
          placeholder="name"
          {...register("username", {
            required: true,
          })}
        />
          {errors.username && <div className="error">{errors.username.type}</div>}
        <input
        style={errors.password ? { borderColor: "red" } : { borderColor: "" }}
          className="auth-input"
          type="email"
          placeholder="email"
          {...register("email", {
            required: true,
          })}
        />
          {errors.email && <div className="error">{errors.email.type}</div>}
        <input
        style={errors.password ? { borderColor: "red" } : { borderColor: "" }}
          className="auth-input"
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
          })}
        />
          {errors.password && <div className="error">{errors.password.type}</div>}
        <button className="auth-button">Register</button>
      </form>
      <div>
        <span>Have you already an account? </span>
        <Link 
        className="auth-link"
        to="/login">Login here</Link>
      </div>
    </div>
  );
};
export default Registration;
