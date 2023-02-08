import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Image } from "@mui/icons-material";
import { Image as DynImage } from "next/image";

const InitializeProject = styled.div`
  width: 350px;
  gap: 50px;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 0px;
  span {
    color: #fff;
  }
  h1 {
    color: #fff;
  }
`;
const H1 = styled.h1`
  font-weight: 900;
  font-size: 2em;
  margin: 100px 0px 10px;
`;
const Button = styled.button`
  font-weight: 700;
  font-size: 1.1em;
  padding: 10px 40px;
  border: none;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px 0px;
`;
const Form = styled.form`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  label {
    display: block;
    padding: 5px 0px;
    font-size: 0.75em;
    color: #fff;
    padding: 8px 0px;
    font-weight: 500;
  }
  input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    width: 100%;
    padding: 12px 20px;
    font-size: 1.1em;
    color: #fff;
    outline: none;
    font-family: "Open Sans", sans-serif;
  }
  input[type="submit"] {
    background-color: transparent;
    color: #2f2f2f;
    border: 2px solid #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;
const NFT_pro = styled.div`
  width: 320px;

  border: 2px solid #fff;
  padding: 35px 35px 20px 35px;
  margin: 25px;

  display: flex;
  flex-direction: column;

  .pro_title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .pro_codes {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    margin-bottom: 15px;
  }

  button {
    margin: 30px 0 10px 0;
    padding: 8px 20px;
    border: 2px solid #fff;
    background-color: unset;
    color: #fff;
    border-radius: 3.36759px;

    font-size: 1.15rem;
    cursor: pointer;
  }

  button:last-child {
    margin: 20px 0 10px 0;
  }
`;

const Demo_img_div = styled.div`
  width: 100%;
  height: 30vh;

  border: 2px solid #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function DashboardLayout() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/createproject");
  };

  const nft_projects = [
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
    {
      title: "NFT Magicians",
      top_left_code: "ERC 721",
      top_right_code: "10 NFTs",
      image_src: "",
      vid_src: "",
    },
  ];

  function Default_div() {
    return (
      <Demo_img_div>
        <div>image/video</div>
      </Demo_img_div>
    );
  }

  return (
    <div>
      <H1>Slipstream Agency</H1>
      <Button onClick={handleClickOpen}>Create Project</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            background: "#1f1f1f",
            border: "2px solid #fff",
            borderRadius: "10px",
          }}
        >
          {/* <Box>
            <Btn onClick={handleClose}>Disagree</Btn>
          </Box> */}
          <InitializeProject>
            <Box>
              <span>Step 1</span>
              <h1>Initialize Project</h1>
            </Box>
            <Form onSubmit={handleSubmit}>
              <Box
                sx={{
                  margin: "20px 0px",
                }}
              >
                <label htmlFor="projectname">
                  Name of project (keep it simple)
                </label>
                <input
                  type="text"
                  id="projectname"
                  placeholder="ex: robogremlins"
                  required
                />
              </Box>

              <input type="submit" value="Initialize" />
            </Form>
          </InitializeProject>
        </DialogContent>
      </Dialog>

      <div className="NFT_pro_container">
        {nft_projects.map(
          ({ title, top_left_code, top_right_code, image_src, vid_src }, i) => (
            <NFT_pro key={i}>
              <div className="pro_title">{title}</div>

              <div className="pro_codes">
                <div>{top_left_code}</div>
                <div>{top_right_code}</div>
              </div>

              <div>
                {image_src !== "" && <DynImage src={image_src} />}
                {vid_src !== "" && <video src={vid_src} controls></video>}
                {image_src === "" && vid_src === "" && (
                  <Default_div></Default_div>
                )}
              </div>
              <button>Add/Manage NFTs</button>
              <button>Domain Setup</button>
            </NFT_pro>
          )
        )}
      </div>
    </div>
  );
}

export default DashboardLayout;
