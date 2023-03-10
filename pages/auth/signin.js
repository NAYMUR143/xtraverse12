import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import logo from "../images/logo.svg";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Box } from "@mui/system";
import Signup from "./signup";
const SignSec = styled.div`
  width: 350px;
  gap: 50px;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
`;
const Btn = styled.button`
  width: 120px;
  padding: 10px 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: 1px solid #fff;
  transition: all 0.3s;
  &:first-of-type {
    background: transparent;
    color: #fff;
  }
  &:hover {
    background: #fff;
    color: #000;
  }
`;

const GoogleBtn = styled.a`
  border: 2px solid rgba(255, 255, 255, 0.6);
  display: block;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 50px;
  text-decoration: none;
  border-radius: 10px;
  span {
    color: rgba(255, 255, 255, 0.8);
  }
  svg {
    color: #fff;
    font-size: 2em;
  }
`;
const Hr = styled.hr`
  border: none;
  height: 2px;
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  margin: 20px 0px;
`;

const Form = styled.form`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  label {
    display: block;
    padding: 5px 0px;
  }
  input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    width: 100%;
    padding: 10px 20px;
    font-size: 1.2em;
    color: #fff;
    outline: none;
    font-family: "Open Sans", sans-serif;
  }
  input[type="submit"] {
    background-color: #fff;
    color: #2f2f2f;
    border: 2px solid #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: transparent;
      color: #fff;
    }
  }
`;
const Span = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
  display: flex;
  gap: 5px;
  padding: 20px 0px;
  cursor: pointer;
  align-items: center;
  a {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
function Login() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signuphandleClickOpen = () => {
    setTimeout(() => {
      setSignupOpen(true);
    }, 200);
  };

  const signuphandleClose = () => {
    setSignupOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/account");
  };
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Btn>Contact Sales</Btn>
        <Btn onClick={handleClickOpen}>Start Building</Btn>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            background: "#1f1f1f",
            border: "2px solid #fff",
            borderRadius: "10px",
          }}
        >
          {/* <Box>
            <Btn onClick={handleClose}>Disagree</Btn>
          </Box> */}
          <SignSec>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "15px 0px 60px",
              }}
            >
              <Image src={logo} alt="logo" />
            </Box>

            <GoogleBtn>
              <AiFillGoogleCircle />
              <span>Sign in with Google</span>
            </GoogleBtn>
            <Hr></Hr>
            <Form onSubmit={handleSubmit}>
              <Box
                sx={{
                  margin: "25px 0px",
                }}
              >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </Box>
              <Box
                sx={{
                  margin: "25px 0px",
                }}
              >
                <label htmlFor="password">Pasword</label>
                <input type="password" id="password" required />
              </Box>
              <input type="submit" value="Sign in" />
            </Form>
            <Span>
              No account?
              <a
                onClick={() => {
                  handleClose();
                  signuphandleClickOpen();
                }}
              >
                Sign up
              </a>
            </Span>
          </SignSec>
        </DialogContent>
      </Dialog>
      <Signup
        signuphandleClickOpen={signuphandleClickOpen}
        signuphandleClose={signuphandleClose}
        signInhandleClickOpen={handleClickOpen}
        signupOpen={signupOpen}
      />
    </>
  );
}

export default Login;
