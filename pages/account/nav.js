import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

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
const Account = styled.div`
  width: 450px;
  margin: 50px auto;
  text-align: center;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 1.3em;
  margin: 18px 0px;
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0px 0px 25px;
  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 0px;
    display: block;
    font-size: 0.95em;
    font-weight: 500;
  }
`;

function Nav() {
  const router = useRouter();

  return (
    <>
      <Header>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="btnsc">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/">Account</Link>
        </div>
      </Header>

      <Account>
        <H1>Account</H1>
        <Ul>
          <li>
            <Link
              style={{
                borderBottom:
                  router.pathname == "/account" ? "2px solid #fff" : "none",
              }}
              href="/account"
            >
              Send us a message
            </Link>
          </li>
          <li>
            <Link
              href="/"
              style={{
                borderBottom:
                  router.pathname == "/" ? "2px solid #fff" : "none",
              }}
            >
              Log out
            </Link>
          </li>
          <li>
            <Link
              href="/account/cancel_subscription"
              style={{
                borderBottom:
                  router.pathname == "/account/cancel_subscription"
                    ? "2px solid #fff"
                    : "none",
              }}
            >
              Cancel subscription
            </Link>
          </li>
        </Ul>
      </Account>
    </>
  );
}

export default Nav;
