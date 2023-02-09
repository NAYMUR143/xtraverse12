import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Nav from "../nav";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  padding: 30px;
`;
const Span = styled.span`
  margin: 10px 0px;
`;
const Account = styled.div`
  width: 450px;
  margin: 50px auto;
  text-align: center;
`;
function Subscrition() {
  return (
    <Main>
      <Nav />
      <Account>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Span>You sure?</Span>
          <Button
            sx={{
              border: "2px solid #fff",
              borderRadius: "5px",
              padding: "12px 20px",
              fontSize: "1em",
              margin: "30px 0px",
              color: "#fff",
            }}
          >
            Nope. I want to speak with someone though
          </Button>
          <Button
            sx={{
              border: "2px solid #fff",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "1em",
              margin: "10px 0px",
              width: "fit-content",
              color: "#fff",
            }}
          >
            Yep, I&apos;m done
          </Button>
        </Box>
      </Account>
    </Main>
  );
}

export default Subscrition;
