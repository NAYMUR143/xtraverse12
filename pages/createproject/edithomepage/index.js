"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { IoIosAddCircle, IoIosArrowDropright } from "react-icons/io";
import { useRouter } from "next/navigation";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Nftnav from "../nftnav";
import axios from "axios";

const Main = styled.main`
  background: #1f1f1f;
  height: 100vh;
  overflow: hidden;
  padding: 30px;
`;
const EditHomesc = styled.div``;
const Wrapper = styled.div`
  width: 500px;
  margin: auto;
`;
const Step = styled.div``;
const Uploadsc = styled.div`
  width: 100%;
  height: 200px;
  background: transparent;
  border: 1px solid #fff;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px 0px 0px;
  .uparrow {
    font-size: 3em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.4em;
      display: block;
      color: rgba(255, 255, 255, 0.6);
    }
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

const Form = styled.form`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  label {
    display: block;
    padding: 5px 0px;
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
const Select_box_container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  align-items: center;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: center;

    > div {
      height: 16vh;
      width: 16vh;

      margin: 15px;

      border-radius: 10px;

      border: 2px solid #fff;
    }
  }
`;

function Index() {
  const [sldIndex, setSldIndex] = useState(0);
  const [edits_data, setEdits_data] = useState({});

  const handleNext = () => {
    setSldIndex(index === layouts.length - 1 ? 0 : sldIndex + 1);
  };
  const handlePrev = () => {
    setSldIndex(index === 0 ? layouts.length - 1 : sldIndex - 1);
  };

  const add_data = (data, from, data_position) => {
    if (from === "blur") {
      setEdits_data({
        ...edits_data,
        [from]: { ...edits_data[from], [data_position]: data },
      });
    } else if (from === "logo") {
      setEdits_data({ ...edits_data, [from]: data });
    } else if (from === "heading") {
      setEdits_data({ ...edits_data, [from]: data });
    } else if (from === "summary") {
      setEdits_data({ ...edits_data, [from]: data });
    } else if (from === "image") {
      console.log(data);
      setEdits_data({
        ...edits_data,
        [from]: { ...edits_data[from], [data_position]: data },
      });
    } else if (from === "small_nft") {
      setEdits_data({ ...edits_data, [from]: [data] });
    } else if (from === "faq_sec") {
      setEdits_data({ ...edits_data, [from]: [data] });
    }
  };

  const layouts = [
    <UpdateBlurs handleNext={handleNext} add_data={add_data} key={12} />,
    <UploadLogo handleNext={handleNext} add_data={add_data} key={13} />,
    <SetHeadingSummary handleNext={handleNext} add_data={add_data} key={14} />,
    <UpdateHeroImg handleNext={handleNext} add_data={add_data} key={15} />,
    <SelectNfts handleNext={handleNext} add_data={add_data} key={16} />,
    <FaqSec add_data={add_data} edits_data={edits_data} key={17} />,
  ];
  return (
    <>
      <Main>
        <Nftnav />
        <EditHomesc>{layouts[sldIndex]}</EditHomesc>
      </Main>
    </>
  );
}

// update blurs
function UpdateBlurs({ handleNext, add_data }) {
  return (
    <>
      <Wrapper>
        <Step>
          <span>Step 5</span>
          <h1>Edit Homepage</h1>
        </Step>
        <Form>
          <Box
            sx={{
              margin: "25px 0px",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "25px",
            }}
          >
            <Box>
              <label htmlFor="" style={{ color: "#fff" }}>
                Blur 1
              </label>
              <input
                onChange={(e) => {
                  add_data(e.target.value, "blur", 1);
                }}
                type="text"
                required
                placeholder="
            #20BC83
              "
              />
            </Box>
            <Box>
              <label htmlFor="" style={{ color: "#fff" }}>
                Blur 2
              </label>

              <input
                onChange={(e) => {
                  add_data(e.target.value, "blur", 2);
                }}
                type="text"
                required
                placeholder="
            #97C35E
              "
              />
            </Box>
            <Box>
              <label htmlFor="" style={{ color: "#fff" }}>
                Blur 3
              </label>

              <input
                onChange={(e) => {
                  add_data(e.target.value, "blur", 3);
                }}
                type="text"
                required
                placeholder="
            #1EA573
              "
              />
            </Box>
          </Box>
          <Button
            sx={{
              background: "#a3f6ab",
              border: "none",
              width: "100%",
              display: "block",
              padding: "15px ",
              color: "#000",
              margin: "15px 0px",
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            Update blurs
          </Button>
          <Button
            sx={{
              background: "transparent",
              border: "2px solid #fff",
              width: "100%",
              display: "block",
              padding: "10px ",
              color: "#000",
              margin: "15px 0px",
              color: "#fff",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
            onClick={handleNext}
          >
            Continue
          </Button>
        </Form>
      </Wrapper>
    </>
  );
}
// upload logo
function UploadLogo({ handleNext, add_data }) {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageUrl, setSelectedImageUrl] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const objUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(e.target.files[0]);

      setSelectedImageUrl(objUrl);
      add_data(objUrl, "logo", 1);
    }
  };
  return (
    <>
      <Wrapper>
        <Step>
          <span>Step 5</span>
          <h1>Edit Homepage</h1>
        </Step>
        <Uploadsc>
          <div className="uparrow">
            <IoIosAddCircle />
            <span>Upload logo</span>
          </div>
          <input
            type="file"
            id="myFile"
            name="filename"
            required
            onChange={imageChange}
          />
          {selectedImage && (
            <div className="upldImg">
              <Image
                src={URL.createObjectURL(selectedImage)}
                width={100}
                height={300}
                alt="upload logo"
              />
              {/* <button onClick={removeSelectedImage}>
                      <IoIosRemoveCircle />
                    </button> */}
            </div>
          )}
        </Uploadsc>
        <Button
          sx={{
            background: "#f4b8ec",
            border: "none",
            width: "100%",
            display: "block",
            padding: "15px ",
            color: "#000",
            margin: "15px 0px",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Update logo
        </Button>
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
          Continue
        </Button>
      </Wrapper>
    </>
  );
}
// update SetHeadingSummary
function SetHeadingSummary({ handleNext, add_data }) {
  return (
    <>
      <Wrapper>
        <Step>
          <span>Step 5</span>
          <h1>Edit Homepage</h1>
        </Step>
        <Form>
          <Box
            sx={{
              margin: "25px 0px",
            }}
          >
            <label htmlFor="heading">Heading</label>
            <input
              onChange={(e) => {
                add_data(e.target.value, "heading", 1);
              }}
              type="text"
              id="heading"
              required
              placeholder="Robo Gremlins"
            />
          </Box>
          <Box
            sx={{
              margin: "25px 0px",
            }}
          >
            <label htmlFor="Summary">Summary</label>
            <input
              onChange={(e) => {
                add_data(e.target.value, "summary", 1);
              }}
              type="text"
              id="Summary"
              required
              placeholder="
              A
              Gary
              Vaynerchuk
              hating
              NFT
              Project
              
              "
            />
          </Box>
          <Button
            sx={{
              background: "#72f5fd",
              border: "none",
              width: "100%",
              display: "block",
              padding: "15px ",
              color: "#000",
              margin: "15px 0px",
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            Update
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              background: "transparent",
              border: "2px solid #fff",
              width: "100%",
              display: "block",
              padding: "10px ",
              color: "#000",
              margin: "15px 0px",
              color: "#fff",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
          >
            Continue
          </Button>
        </Form>
      </Wrapper>
    </>
  );
}
// update heor img
function UpdateHeroImg({ handleNext, add_data }) {
  const [selectedImage1, setSelectedImage1] = useState();
  const [selectedImage2, setSelectedImage2] = useState();
  const [selectedImage3, setSelectedImage3] = useState();

  const imageChange = (e, position) => {
    if (e.target.files && e.target.files.length > 0) {
      const objUrl = URL.createObjectURL(e.target.files[0]);

      position === 1 && setSelectedImage1(objUrl);
      position === 2 && setSelectedImage2(objUrl);
      position === 3 && setSelectedImage3(objUrl);

      add_data(objUrl, "image", position);
    }
  };

  return (
    <>
      <Wrapper>
        <Step>
          <span>Step 5</span>
          <h1>Edit Homepage</h1>
        </Step>
        <Form>
          <Box
            sx={{
              margin: "25px 0px",
              display: "flex",
              gap: "15px",
            }}
          >
            <input
              type="file"
              required
              placeholder="image 1"
              onChange={(e) => {
                imageChange(e, 1);
              }}
            />
            <input
              type="file"
              required
              placeholder="image 2"
              onChange={(e) => {
                imageChange(e, 2);
              }}
            />
            <input
              type="file"
              required
              placeholder="image 3"
              onChange={(e) => {
                imageChange(e, 3);
              }}
            />
          </Box>
          <Button
            sx={{
              background: "#fdf150",
              border: "none",
              width: "100%",
              display: "block",
              padding: "10px ",
              color: "#000",
              margin: "15px 0px",
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            Update hero Images
          </Button>
          <Button
            sx={{
              background: "transparent",
              border: "2px solid #fff",
              width: "100%",
              display: "block",
              padding: "10px ",
              color: "#000",
              margin: "15px 0px",
              color: "#fff",
              "&:hover": {
                background: "#fff",
                color: "#000",
              },
            }}
            onClick={handleNext}
          >
            Continue
          </Button>
        </Form>
      </Wrapper>
    </>
  );
}
//select nfts
function SelectNfts({ handleNext, add_data }) {
  return (
    <>
      <Wrapper>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span>Select up to 3 NFTs to show case</span>
          <span>2/3 selected</span>
        </Box>

        <Select_box_container>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Select_box_container>

        <Box
          onClick={() => {
            add_data("selected 9 tiles", "small_nft", 1);
            handleNext();
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5em",
            cursor: "pointer",
          }}
        >
          <IoIosArrowDropright />
        </Box>
      </Wrapper>
    </>
  );
}
// frequently ask question
function FaqSec({ add_data, edits_data }) {
  const router = useRouter();
  const [qsn_, set_qsn_] = useState("");
  const [ans_, set_ans_] = useState("");
  const [qsn_s_arr, set_qsn_s_arr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios({
        url: "/api/editHomePageData",
        method: "POST",
        data: edits_data,
      });

      router.push("/template");
    } catch (error) {
      console.log("Error", error);
    }
  };

  function add_into_qsn_ans_arr(qsn, ans) {
    let new_arr = [...qsn_s_arr, { qsn, ans }];
    set_qsn_s_arr(new_arr);
    add_data(new_arr, "faq_sec", 1);
  }

  return (
    <>
      <Wrapper>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Step>
            <span>Step 6</span>
            <h1>Edit Homepage</h1>
          </Step>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Box
              sx={{
                margin: "25px 0px",
              }}
            >
              <label
                htmlFor="heading"
                style={{ color: "#fff", textAlign: "left" }}
              >
                Question
              </label>
              <input
                onChange={(e) => {
                  set_qsn_(e.target.value);
                }}
                type="text"
                id="heading"
                required
                placeholder="What will impress Irene?"
              />
            </Box>
            <Box
              sx={{
                margin: "25px 0px",
              }}
            >
              <label
                htmlFor="Summary"
                style={{ color: "#fff", textAlign: "left" }}
              >
                Answer
              </label>
              <input
                onChange={(e) => {
                  set_ans_(e.target.value);
                }}
                type="text"
                id="Summary"
                required
                placeholder="
              A
              Gary
              Vaynerchuk
              hating
              NFT
              Project
              
              "
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px ",
              }}
            >
              <Button
                sx={{
                  background: "transparent",
                  border: "2px solid #fff",
                  width: "100%",
                  display: "block",
                  padding: "10px ",
                  color: "#000",
                  margin: "15px 0px",
                  color: "#fff",
                  "&:hover": {
                    background: "#fff",
                    color: "#000",
                  },
                }}
              >
                Edit FAQs
              </Button>
              <Button
                onClick={() => {
                  add_into_qsn_ans_arr(qsn_, ans_);
                }}
                sx={{
                  background: "#f4b8ec",
                  border: "none",
                  width: "100%",
                  display: "block",
                  padding: "15px ",
                  color: "#000",
                  margin: "15px 0px",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                Add FAQs
              </Button>
            </Box>
            <Button
              sx={{
                background: "#fff",
                border: "none",
                width: "100%",
                display: "block",
                padding: "12px ",
                color: "#000",
                margin: "15px auto",
                width: "50%",
                border: "2px solid #fff",
                "&:hover": {
                  background: "transparent",
                  border: "2px solid #fff",
                  color: "#fff",
                },
              }}
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Box>
      </Wrapper>
    </>
  );
}
export default Index;
