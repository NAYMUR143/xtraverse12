import styled from "@emotion/styled";
import React, { useState } from "react";
import { IoIosAddCircle, IoIosArrowDropright } from "react-icons/io";
import { useRouter } from "next/navigation";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Nftnav from "../nftnav";
const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  overflow: hidden;
  padding: 30px;
`;
const EditHomesc = styled.div``;
const Wrapper = styled.div`
  width: 400px;
  margin: auto;
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
  &.DomainTypeForm {
    span {
      color: #fff;
    }
    input {
      padding: 10px 20px;
      border: none;
      &::placeholder {
        opacity: 0.7;
      }
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
  const [step, setStep] = useState("Step 1");

  const handleNext = () => {
    setIndex(index === layouts.length - 1 ? 0 : index + 1);
  };
  const handlePrev = () => {
    setIndex(index === 0 ? layouts.length - 1 : index - 1);
  };
  const layouts = [
    <DomainSelection handleNext={handleNext} key={12} />,
    <DomainType handleNext={handleNext} key={13} />,
    <AllSet handleNext={handleNext} key={14} />,
    <ManageDomains key={15} />,
  ];
  return (
    <Main>
      <Nftnav />
      <EditHomesc>
        <Wrapper>
          <Step>
            <span>Step 5</span>
            <h1> Domain Configuration</h1>
          </Step>
          {layouts[index]}
          <ul className="activeDot">
            <li className={index === 0 ? "active" : ""}></li>
            <li className={index === 1 ? "active" : ""}></li>
            <li className={index === 2 ? "active" : ""}></li>
            <li className={index === 3 ? "active" : ""}></li>
          </ul>
        </Wrapper>
      </EditHomesc>
    </Main>
  );
}

// Domain Selection
function DomainSelection({ handleNext }) {
  return (
    <>
      <Form className="domainForm">
        <Box
          sx={{
            margin: "25px 0px",
          }}
        >
          <Box
            sx={{
              margin: "25px 0px",
            }}
          >
            <label htmlFor="">Live subdomain</label>
            <span>
              You can share this live site with your client until domain is
              setup.
            </span>
            <FormInput>
              <input
                type="text"
                required
                placeholder="
                veefriendskiller.youragency.io
              "
              />

              <IoIosArrowDropright className="rotateSvg" />
            </FormInput>
          </Box>
          <Box>
            <label htmlFor="">Add your domain (not required)</label>

            <FormInput>
              <input
                type="text"
                required
                placeholder="
                clientsdomain.com
              "
              />

              <IoIosArrowDropright />
            </FormInput>
          </Box>
        </Box>
        <Button
          sx={{
            background: "transparent",
            border: "2px solid #fff",
            width: "100%",
            display: "block",
            padding: "15px ",
            color: "#000",
            margin: "15px 0px",
            borderRadius: "10px",
            color: "#fff",
            "&:hover": {
              background: "#fff",
              color: "#000",
            },
          }}
          onClick={handleNext}
        >
          Next
        </Button>
      </Form>
    </>
  );
}
// DomainType
function DomainType({ handleNext }) {
  return (
    <>
      <Form className="DomainTypeForm">
        <Box
          sx={{
            padding: "50px 0px 30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Type:</span>
            <input type="text" placeholder="A" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Name:</span>
            <input type="text" placeholder="@" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>Value:</span>
            <input type="text" placeholder="76.76.21.21" />
          </Box>
        </Box>

        <span style={{ fontWeight: "600" }}>Instuctions:</span>
        <p>
          Head over to your DNS provider (website that controls your domain
          name) and add a CNAME record with the above values.
        </p>
        <Button
          onClick={handleNext}
          sx={{
            background: "transparent",
            border: "2px solid #fff",
            width: "100%",
            display: "block",
            padding: "12px ",
            color: "#000",
            margin: "15px 0px",
            color: "#fff",
            "&:hover": {
              background: "#fff",
              color: "#000",
            },
          }}
        >
          I added the records
        </Button>
      </Form>
    </>
  );
}
// Check all set
function AllSet({ handleNext }) {
  return (
    <>
      <Form className="DomainTypeForm">
        <Box
          sx={{
            textAlign: "center",
            fontSize: "1.2em",
            padding: "30px 0px 0px",
          }}
        >
          <p>Your&apos;re all set!</p>
        </Box>

        <p>
          We’ll scan for your domain name and provision an SSL certificate
          automatically for free. Usually DNS propagation happens quickly.
          However, in the worst case, it may take up to 24 hours.
        </p>

        <Box
          sx={{
            padding: "20px 0px 20px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "22% auto",
              alignItems: "center",
              gap: "5px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Domain:</span>
            <input type="text" placeholder="tonyferguson.io" />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "22% auto",
              alignItems: "center",
              gap: "5px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Subdomain:</span>
            <input type="text" placeholder="tonyferguson.xtraverse.com" />
          </Box>
        </Box>

        <Button
          onClick={handleNext}
          sx={{
            background: "transparent",
            border: "2px solid #fff",
            width: "100%",
            display: "block",
            padding: "12px ",
            color: "#000",
            margin: "15px 0px",
            color: "#fff",
            "&:hover": {
              background: "#fff",
              color: "#000",
            },
          }}
        >
          I added the records
        </Button>
      </Form>
    </>
  );
}
// Manage domains
function ManageDomains() {
  return (
    <>
      <Form className="DomainTypeForm">
        <Box
          sx={{
            textAlign: "center",
            fontSize: "1.2em",
            padding: "30px 0px 0px",
          }}
        >
          <p>Manage domains</p>
        </Box>

        <p>
          If you’ve added the CNAME record and you don’t see the status of your
          domain as “configured” after 24 hours, we recommend you contacting
          your DNS provider’s support team to ensure you’ve added the CNAME
          record correctly.
        </p>

        <Box
          sx={{
            padding: "20px 0px 20px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "22% auto",
              alignItems: "center",
              gap: "5px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Domain:</span>
            <input type="text" placeholder="tonyferguson.io" />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "22% auto",
              alignItems: "center",
              gap: "5px",
              borderBottom: "2px solid #fff",
            }}
          >
            <span>Status:</span>
            <input type="text" placeholder="Not configured" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              background: "transparent",
              border: "2px solid #fff",
              width: "100%",
              display: "block",
              padding: "15px ",
              color: "#000",
              margin: "15px 0px",
              color: "#fff",
              borderRadius: "10px",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
          >
            Refresh
          </Button>
          <Button
            sx={{
              background: "transparent",
              border: "2px solid #fff",
              width: "100%",
              display: "block",
              padding: "15px ",
              color: "#000",
              margin: "15px 0px",
              color: "#fff",
              borderRadius: "10px",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
          >
            Remove
          </Button>
        </Box>
      </Form>
    </>
  );
}

export default Index;
