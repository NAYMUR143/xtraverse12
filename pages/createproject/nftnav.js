import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const Header = styled.header`
  width: 100%;
  display: flex;
  height: 10vh;
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
const Ul = styled.ul`
  width: 550px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 10px auto 25px;
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: 1.5em;
    }
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 5px 0px;
    display: block;
    font-size: 0.95em;
    font-weight: 500;
    &.activeli {
      color: rgba(255, 255, 255.1);
      font-weight: 700;
    }
  }
`;

function Nftnav() {
  const router = useRouter();
  return (
    <>
      <Header>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="btnsc">
          <Link href="/">Dashboard</Link>
          <Link href="/">Account</Link>
        </div>
      </Header>
      <Ul>
        <li>
          <Link
            style={{
              borderBottom:
                router.pathname == "/createproject" ? "2px solid #fff" : "none",
            }}
            href="/createproject"
          >
            Template
          </Link>
        </li>
        <li>
          <Link
            href="/createproject/tokentype"
            style={{
              borderBottom:
                router.pathname == "/createproject/tokentype"
                  ? "2px solid #fff"
                  : "none",
            }}
          >
            Token type
          </Link>
        </li>
        <li>
          <Link
            href="/createproject/uploadnfts"
            style={{
              borderBottom:
                router.pathname == "/createproject/uploadnfts"
                  ? "2px solid #fff"
                  : "none",
            }}
          >
            Upload NFTs
          </Link>
        </li>
        <li>
          <Link
            href="/createproject/edithomepage"
            style={{
              borderBottom:
                router.pathname == "/createproject/edithomepage"
                  ? "2px solid #fff"
                  : "none",
            }}
          >
            Edit homepage
          </Link>
        </li>
        <li>
          <Link
            href="/createproject/domain"
            style={{
              borderBottom:
                router.pathname == "/createproject/domain"
                  ? "2px solid #fff"
                  : "none",
            }}
          >
            Domain
          </Link>
        </li>
      </Ul>
    </>
  );
}
export default Nftnav;
