import React from "react";
import logo from "..//../assets/image/logo.png";
import "./auth.scss";
import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { login } from "../../redux/action/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = ({ setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const userData = {
    name: "sumit nirmal",
  };

  const submitLogin = () => {
    setOpen(false);
    console.log("Login");
    dispatch(login(userData));
    navigate("./find-work")
    console.log(user)
    console.log(isAuthenticated)
  };

  return (
    <div>
      <div className="login-top-component">
        <img src={logo} alt="" />
        <h1>Welcome Back</h1>
        <span>Please enter your details to sign in.</span>
      </div>
      <div className="google-sign-in">
        <FcGoogle fontSize={25} />
        <span>Google</span>
      </div>
      <div className="or">
        <span>or</span>
      </div>

      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Box>

        <div className="forget-password-component">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me for 30 Days"
            />
          </FormGroup>
          <span className="forget-password">Forget Password</span>
        </div>

        <button
          className="sign-in-btn"
          onClick={() => {
            submitLogin();
          }}
        >
          Sign In
        </button>

        <div className="create-account-component">
          <span>
            Don't have an account?
            <a href="./signup" className="create-account">
              Create account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
