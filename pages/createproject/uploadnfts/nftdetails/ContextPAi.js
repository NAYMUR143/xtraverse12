import React, { useContext, useState } from "react";
import { ImageContext } from "../index";

const AnotherPage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    return <div>Loading...</div>;
  }

  const [imageData, setImageData] = useState(null);
  const { image } = context;

  if (image && !imageData) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
    };
    reader.readAsDataURL(image);
  }

  return (
    <div>
      {imageData && <img src={imageData} />}
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnotherPage;
