import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./stylesheet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  let navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data?.auth_token);
      localStorage.setItem("userId", response.data?.userId);

      navigate("/chat");
    } catch (error) {
      console.log("There was a problem with the Axios request:", error);
    }
  };
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingContainer}>
        <Typography className={classes.headingMain}>Login</Typography>
      </Box>

      <Box className={classes.cardWrapper}>
        <Box className={classes.cardContainer}>
          <Box className={classes.frame74}>
            <Box className={classes.textFieldContainer}>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id="standard-basic-1"
                label="Email"
                variant="standard"
                type={"email"}
                className={classes.textField}
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                id="standard-basic-2"
                label="Password"
                variant="standard"
                type={"password"}
                className={classes.textField}
                InputProps={{ disableUnderline: true }}
              />

              <Box className={classes.btnContainer}>
                <Button
                  style={{ border: "1px solid blue" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
