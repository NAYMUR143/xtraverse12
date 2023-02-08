import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TemplateHeader from "../templateheader";
const Main = styled.div`
  background: #fff;
`;
const Templatepage = styled.div`
  background: #fff;
  padding: 40px;
  position: relative;
  height: 100vh;
`;
const Herosec = styled.section`
  width: 100%;
  height: 100%;
  display: block;
`;
function page(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/uploadNftData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <>
      <Main>
        <Templatepage>
          <TemplateHeader />
          <Herosec>
            marketplace
            <Box
              sx={{
                background: "#000",
                height: "200px",
                width: "200px",
                margin: "80px",
              }}
            >
              <h1 style={{ color: "#fff" }}>{data.addStory}</h1>
              <p style={{ color: "#fff" }}>{data.selectedVideoUrl}</p>
            </Box>
          </Herosec>
        </Templatepage>
      </Main>
    </>
  );
}

export default page;
