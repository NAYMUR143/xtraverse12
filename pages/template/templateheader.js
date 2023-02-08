import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/tepmplatelogo.svg";
import { Box } from "@mui/system";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  z-index: 2;
  padding: 0px 40px;
  .btnsc {
    display: flex;
    gap: 15px;
    a {
      text-decoration: none;
      text-align: center;
      color: #212121;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      font-weight: 600;

      &:last-child {
        margin-left: 30px;
        background: #212121;
        border: 2px solid #212121;
        color: #fff;
        width: 150px;
      }
      &:hover {
        text-decoration: underline;
        &:last-child {
          color: #000;
          background: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

export default function TemplateHeader() {
  return (
    <Header>
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="btnsc">
        <Link href="/template/marketplace">Marketplace</Link>
        <Link href="/template/waitlist">Waitlist</Link>
        <Link href="/">Connect Wallet</Link>
      </div>
    </Header>
  );
}
