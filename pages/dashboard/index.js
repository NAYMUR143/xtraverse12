import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import { Box } from "@mui/system";
import DashboardLayout from "./layout";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  padding: 30px;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btnsc {
    display: flex;
    gap: 15px;
    a {
      text-decoration: none;
      border: 2px solid #bebebe;
      width: 120px;
      height: 42px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      &:hover {
        background: #fff;
        border: 2px solid #fff;
        color: #000;
      }
    }
  }
`;
const Dashboardsc = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;
  position: relative;

  .NFT_pro_container {
    width: 100vw;
    background-color: #1f1f1f;

    display: flex;
    flex-direction: row;

    justify-content: center;
    flex-wrap: wrap;

    padding: 10px 12%;
  }
`;

export default function layout() {
  return (
    <Main>
      <Header>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="btnsc">
          <Link href="/">Dashboard</Link>
          <Link href="/">Account</Link>
        </div>
      </Header>
      <Dashboardsc>
        <DashboardLayout />
      </Dashboardsc>
    </Main>
  );
}
