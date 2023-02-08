import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import shadow from "../images/shadow.svg";
import TemplateHeader from "./templateheader";
const Main = styled.div`
  background: #fff;
`;
const Templatepage = styled.div`
  background: #fff;
  padding: 40px;
  position: relative;
  height: 100vh;
`;
const ShadowImg = styled.div`
  position: absolute;
  top: -55%;
  left: 0px;
  height: 100vh;
  img {
    height: 100%;
  }
`;
function index() {
  return (
    <Main>
      <Templatepage>
        <TemplateHeader />
        <ShadowImg>
          <Image src={shadow} alt="shadow img" />
        </ShadowImg>
      </Templatepage>
    </Main>
  );
}

export default index;
