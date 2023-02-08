import React from "react";
import styled from "@emotion/styled";
import { BsPlusLg } from "react-icons/bs";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";

const GridSc = styled.div`
  width: 100%;
  margin: 0px 0px 0px;
  display: grid;
  grid-template-columns: 50% auto;
  @media screen and (min-width: 1400px) {
    width: 80%;
    margin: auto;
  }

  .TitleTxt {
    display: flex;
    justify-content: end;
    padding-right: 0px;

    width: 100%;
    height: 100%;
    span {
      color: #fff;
    }
    h1 {
      color: #fff;
      margin: 20px 0px;
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
      margin: 15px 0px;
      width: 100%;
      text-align: center;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
  .dragDrop {
    text-align: center;
    width: 100%;
    display: block;
    font-size: 0.8em;
    padding: 10px 0px;
  }
`;
const Uploadsc = styled.div`
  width: 280px;
  height: 300px;
  background: transparent;
  border: 1px solid #fff;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0px 0px;
  .uparrow {
    font-size: 6em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .upldImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
`;
const Requirements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.2em;
    font-weight: 700;
    padding: 0px 0px 4px;
  }
  ul {
    padding-left: 25px;
    li {
      padding: 1.2px 0px;
      font-size: 0.85em;
      font-weight: 400;
    }
  }
`;
// UploadNft section
function UploadNftsc({ handleNext, handleImageChange, selectedImage }) {
  return (
    <>
      <GridSc>
        <div className="TitleTxt">
          <div>
            <span>Step 3</span>
            <h1>Upload NFTs</h1>
            <form
              onSubmit={() => {
                selectedImage, handleNext();
              }}
            >
              <Uploadsc>
                <div className="uparrow">
                  <BsPlusLg />
                </div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  required
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div className="upldImg">
                    <Image
                      src={selectedImage}
                      width={100}
                      height={300}
                      alt="upload img"
                    />
                  </div>
                )}
              </Uploadsc>

              <span className="dragDrop">
                Drag & drop files or folders here, <br />
                or click to select files.
              </span>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "3em",
                    borderRadius: "50%",
                  }}
                  type="submit"
                >
                  <FiArrowRightCircle />
                </Button>
              </Box>
            </form>
          </div>
        </div>

        <Requirements>
          <Box
            sx={{
              paddingBottom: "25px",
            }}
          >
            <p>Requirements</p>
            <ul>
              <li>
                Files <span>must</span> contain one .csv or .json file with{" "}
                <br />
                metadata.
                <ul>
                  <li>Download example.CSV</li>
                  <li>Download example.json</li>
                </ul>
              </li>
              <li>
                The csv must have a
                <span style={{ fontWeight: "600" }}>name</span> column, which{" "}
                <br />
                defines the name of the NFT.
              </li>
              <li>
                Asset names <span>must</span> be sequential 0,1,2,3...n. It{" "}
                <br />
                doesn’t matter at what number you begin.
                <ul>
                  <li>Example: 123.png, 124.png</li>
                </ul>
              </li>
            </ul>
          </Box>
          <Box>
            <p>Options</p>
            <ul>
              <li>
                mages and other file types can be used in <br /> combination.
                <ul>
                  <li>
                    They both have to follow the asset <br /> naming convention
                    above.
                  </li>
                </ul>
              </li>
              <li>
                When uploading files, we will upload them <br /> and pin them to
                IPFS automatically for you. If <br /> you already have the files
                uploaded, you can <br /> add an image and/or animation_url
                column <br /> and add the IPFS hashes there.
                <ul>
                  <li>Download example.csv</li>
                </ul>
              </li>
              <li>
                If you want to make your media files map to <br /> your NFTs,
                you can add the name of your <br /> files to the image and{" "}
                <span style={{ fontWeight: 600 }}>animation_url</span>
                column.
              </li>
            </ul>
          </Box>
        </Requirements>
      </GridSc>
    </>
  );
}
export default UploadNftsc;
