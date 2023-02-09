import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import shadow from "../images/shadow.svg";
import TemplateHeader from "./templateheader";
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
const ShadowImg = styled.div`
  position: absolute;
  top: -55%;
  left: 0px;
  height: 100vh;
  img {
    height: 100%;
  }
`;
function Index() {
  const [edits, setEdits] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      let { data } = await axios({
        url: "/api/editHomePageData",
        method: "GET",
      });

      console.log(data);

      setEdits(data);
    };

    fetchMe();
  }, []);

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

export default Index;
