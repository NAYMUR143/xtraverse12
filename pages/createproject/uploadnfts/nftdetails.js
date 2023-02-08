import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import { IoIosArrowDropleftCircle } from "react-icons/io";

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
// DomainType
const PreviewBox = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% auto;
  background: #fff;
  padding: 10px;
  align-items: center;
  .imgbox {
    width: 90%;
    height: 80%;
    background: #212121;
  }
  h1,
  p {
    color: #212121;
    line-height: 120%;
    margin: 10px 0px;
  }
  p {
    font-size: 0.9em;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
function Nftdetails({
  handleNext,
  handlePrev,
  selectedImage,
  setNftName,
  nftName,
  addUntility,
  setAddUntility,
}) {
  console.log(selectedImage);

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
        <Form className="forminput">
          <Box
            sx={{
              padding: "0px 0px 0px",
            }}
          >
            <Box>
              <span>Name of NFT</span>
              <input
                type="text"
                placeholder="Ring girl hello"
                onChange={(e) => setNftName(e.target.value)}
              />
            </Box>
            <Box sx={{}}>
              <span>Add Utitlity:</span>
              <input
                onChange={(e) => setAddUntility(e.target.value)}
                type="text"
                placeholder="Ex:Admision ticket , lifetime Costco Member"
              />
            </Box>
            <Box
              sx={{
                gap: "10px",
              }}
            >
              <span>Add Tag(not required)</span>
              <input type="text" placeholder="Ex:Cats, Dogs, Fruits" />
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
              onClick={handleNext}
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
              Next
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
            <div className="previewtxt">
              <h1>{nftName}</h1>
              <p>{addUntility}</p>
            </div>
            <div className="imgbox">
              <Image
                src={selectedImage}
                alt="selct image"
                width={100}
                height={100}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </PreviewBox>
        </Box>
      </Box>
    </>
  );
}
export default Nftdetails;
