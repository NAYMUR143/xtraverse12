import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Nav from "./nav";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  padding: 30px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    background: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
  }
  input {
    border: none;
    background: #fff;
    color: #000;
    font-weight: 600;
    font-size: 1.1em;
    padding: 16px 0px;
    border-radius: 5px;
    margin: 20px 0px;
    cursor: pointer;
  }
`;
const Account = styled.div`
  width: 450px;
  margin: 50px auto;
  text-align: center;
`;
function index() {
  return (
    <Main>
      <Nav />
      <Account>
        <Form>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="Send message" />
        </Form>
      </Account>
    </Main>
  );
}

export default index;
