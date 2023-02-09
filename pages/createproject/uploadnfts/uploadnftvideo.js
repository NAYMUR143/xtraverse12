import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import axios from "axios";
import { useRouter } from "next/router";
const Form = styled.form`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  &.domainForm {
    label {
      display: block;
      color: #fff;
      font-weight: 400;
    }
    span {
      font-size: 0.7em;
      display: block;
    }
    input {
      margin: 5px 0px;
    }
  }
  &.forminput {
    input {
      padding: 18px 10px;
      border: 2px solid #fff;
      border-radius: 10px;
      margin: 5px 0px 20px;
    }
    span {
      color: #fff;
      font-weight: 500;
      display: block;
      margin: 4px 0px;
    }
    p {
      color: #fff;
      font-weight: 300;
      line-height: 120%;
      padding: 10px 0px;
    }
  }
  input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    width: 100%;
    padding: 15px 20px;
    font-size: 1em;
    color: #fff;
    outline: none;
    font-family: "Open Sans", sans-serif;
  }
  .inputsc {
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0.6);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 25px;
    input {
      border: none;
      padding: 0px;
      margin: 0px;
      position: absolute;
      top: 0px;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: cell;
    }
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
  textarea {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    width: 100%;
    padding: 15px 20px;
    font-size: 1em;
    color: #fff;
    resize: none;
    height: 200px;
  }
`;
// DomainType
const PreviewBox = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 10px;
  .imgbox {
    width: 100%;
    height: 80%;
    background: #212121;
    video {
      height: 100%;
      width: 100%;
    }
  }
  h1,
  p {
    color: #212121;
    line-height: 120%;
    margin: 10px 0px;
  }
  p {
    font-size: 0.9em;
    text-align: center;
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

function Uploadnftvideo({
  handlePrev,
  handleVideoChange,
  selectedVideoUrl,
  setAddStory,
  addStory,
  selectedImage,

  nftName,
  addUntility,
  tags,
}) {
  const router = useRouter();

  const handleSubmitAllData = async (e) => {
    e.preventDefault();
    const allData = {
      nftName,
      addUntility,
      addStory,
      tags,
      selectedVideoUrl,
      selectedImage,
    };

    try {
      const { data } = await axios({
        url: "/api/uploadNftData",
        method: "POST",
        data: allData,
      });

      router.push("/template/marketplace");
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "35% auto",
          gap: "40px",
          width: "80%",
          margin: "auto",
        }}
      >
        <Form className="forminput" onSubmit={handleSubmitAllData}>
          <Box
            sx={{
              padding: "0px 0px 0px",
            }}
          >
            <Box>
              <span>Name of NFT</span>
              <div className="inputsc">
                <input
                  type="file"
                  placeholder="Ring girl hello"
                  onChange={handleVideoChange}
                />
                <span>Upload Sales video (not required)</span>
              </div>
            </Box>

            <Box>
              <span>Add Story (not required):</span>
              <textarea
                onChange={(e) => setAddStory(e.target.value)}
                placeholder="Ex:Admision ticket , lifetime Costco Member"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Button
              onClick={handlePrev}
              sx={{
                background: "transparent",
                border: "2px solid #fff",
                width: "100%",
                display: "block",
                height: "60px",
                color: "#fff",
                fontSize: "2em",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  background: "#fff",
                  color: "#000",
                },
              }}
            >
              <IoIosArrowDropleftCircle />
            </Button>

            <Button
              type="submit"
              sx={{
                background: "#fff",
                border: "2px solid #fff",
                width: "100%",
                display: "block",
                height: "60px",
                color: "#000",
                margin: "15px 0px",
                "&:hover": {
                  background: "transparent",
                  color: "#fff",
                },
              }}
            >
              Complete
            </Button>
          </Box>
        </Form>

        <Box
          sx={{
            border: "2px solid #BEBEBE",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <PreviewBox>
            <div className="imgbox">
              <video src={selectedVideoUrl} muted autoPlay></video>
            </div>
            <p>{addStory}</p>
          </PreviewBox>
        </Box>
      </Box>
    </>
  );
}
export default Uploadnftvideo;
