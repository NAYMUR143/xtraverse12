import React, { useContext, useState } from "react";
import Router from "next/router";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import Nftnav from "../nftnav";
import axios from "axios";
import UploadNftsc from "./uploadNftsc";
import Nftdetails from "./nftdetails";
import Uploadnftvideo from "./uploadnftvideo";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  overflow: hidden;
  padding: 30px;
  .activeDot {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin: 30px 0px;
    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      list-style: none;
      background: transparent;
      border: 2px solid #fff;
      transition: all 0.3s;
      &.active {
        background: #fff;
      }
    }
  }
`;

const Step = styled.div`
  text-align: center;
  h1 {
    font-weight: 800;
  }
`;

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
const FormInput = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);
    font-size: 1.8em;
    color: #fff;
    &.rotateSvg {
      transform: translate(-50%, -50%) rotate(-30deg);
    }
  }
`;

function Index() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index === layouts.length - 1 ? 0 : index + 1);
  };
  const handlePrev = () => {
    setIndex(index === 0 ? layouts.length - 1 : index - 1);
  };

  // nft details name, utitlity, tag
  const [nftName, setNftName] = useState("Draken");
  const [addUntility, setAddUntility] = useState(
    "DRK is the first of its kind. Bringing AAA quality to the #NFT world with mythical creatures inside virtual realtiy space."
  );

  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const slcimg = setSelectedImage(e.target.files[0]);
  //     console.log(slcimg);
  //   }
  // };

  // for upload videosec
  const [addStory, setAddStory] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,provident vero numquam aperiam ratione vel corrupti maioresconsequuntur aliquid impedit"
  );

  // video url
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const handleVideoChange = (event) => {
    const videoFile = event.target.files[0];
    setSelectedVideo(videoFile);
    const videoUrl = URL.createObjectURL(videoFile);
    setSelectedVideoUrl(videoUrl);
  };

  // for image url
  const [selectedImage, setSelectedImage] = useState();
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    const reader = new FileReader();
    reader.onload = () => setSelectedImage(reader.result);
    reader.readAsDataURL(imageFile);
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  //for tags
  const [tags, setTags] = useState([]);

  const layouts = [
    <UploadNftsc
      handleNext={handleNext}
      handleImageChange={handleImageChange}
      selectedImage={selectedImage}
      removeSelectedImage={removeSelectedImage}
      key={12}
    />,
    <Nftdetails
      handleNext={handleNext}
      selectedImage={selectedImage}
      handlePrev={handlePrev}
      setNftName={setNftName}
      nftName={nftName}
      addUntility={addUntility}
      setAddUntility={setAddUntility}
      setTags={setTags}
      key={13}
    />,
    <Uploadnftvideo
      handlePrev={handlePrev}
      handleVideoChange={handleVideoChange}
      selectedVideoUrl={selectedVideoUrl}
      setAddStory={setAddStory}
      addStory={addStory}
      selectedImage={selectedImage}
      nftName={nftName}
      addUntility={addUntility}
      tags={tags}
      key={14}
    />,
  ];
  return (
    <Main>
      <Nftnav />
      {layouts[index]}
      <ul className="activeDot">
        <li className={index === 0 ? "active" : ""}></li>
        <li className={index === 1 ? "active" : ""}></li>
        <li className={index === 2 ? "active" : ""}></li>
      </ul>
    </Main>
  );
}

export default Index;
