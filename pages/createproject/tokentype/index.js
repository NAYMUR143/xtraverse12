import React, { useState, Component } from "react";
import Slider from "react-slick";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Nftnav from "../nftnav";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  padding: 30px;
`;
const Tokensec = styled.div`
  width: 100vw;
  height: 80vh;
  margin: 0px 0px 0px;
  display: grid;
  place-content: center;
  button {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    padding: 30px;
    border: 1px solid #fff;
    margin: 20px 0px 50px;
    width: 80%;
    color: #fff;
    p {
      opacity: 0.8;
      text-transform: capitalize;
    }
  }
  .TitleTxt {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    width: 100%;
    height: 100%;
    span {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
    a {
      display: inline-block;
      padding: 10px 55px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
      margin: 30px 0px;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
`;

function page() {
  return (
    <Main>
      <Nftnav />
      <Tokensec>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4.5}>
            <div className="TitleTxt">
              <div>
                <span>Step 3</span>
                <h1>Select token type</h1>

                <Link href="/createproject/uploadnfts">Upload NFTs</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={7.5}>
            <Button>
              <h1>ERC-721A</h1>
              <p>
                This project type is for you if you want a collection where each
                token is a unique image that can only have one owner. This
                project is great for building large communities. This contract
                type is by far the most popular NFT type.
              </p>
            </Button>
            <Button>
              <h1>ERC-1155</h1>
              <p>
                This project type is for you if you want a collection where each
                token is a unique image that can have multiple owners at once.
                This project is great for building access passess and
                meta-collectibles for your existing communities.
              </p>
            </Button>
          </Grid>
        </Grid>
      </Tokensec>
    </Main>
  );
}

export default page;
