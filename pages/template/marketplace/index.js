import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TemplateHeader from "../templateheader";
import axios from "axios";

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

  p {
    color: #000;
  }

  img {
    width: 200px;
    height: auto;
  }

  video {
    width: 200px;
    height: auto;
  }

  li {
    color: #000;
  }
`;
function page(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMe = async () => {
      let { data } = await axios({
        url: "/api/uploadNftData",
        method: "GET",
      });

      setData(data);

      setLoading(false);
    };

    fetchMe();
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
            ></Box>
            <p>{data.nftName}</p>
            <br />
            <br />
            <p>{data.addUntility}</p>
            <br />
            <br />
            <p>{data.addStory}</p>
            <br />
            <br />
            <ul>
              <p>tags</p>
              {data.tags.map((itm, i) => (
                <li key={i}>{itm}</li>
              ))}
            </ul>
            <img src={data.selectedImage} alt="temp_image" />
            <br />
            <br />
            <video src={data.selectedVideoUrl} controls></video>
          </Herosec>
        </Templatepage>
      </Main>
    </>
  );
}

export default page;
