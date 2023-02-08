import Router from "next/router";
import React, { useContext } from "react";
import AppContext from "../../../AppContext";

function Data() {
  const context = useContext(AppContext);
  // const router = useRouter();
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    Router.replace(
      "/createproject/uploadnfts/nftdetails",
      {
        pathname: "/createproject/uploadnfts/nftdetails",
        query: { image: imageUrl },
      },
      { shallow: true }
    );
  };

  return (
    <div>
      <p>{context.session}</p>
      <form action="" onSubmit={handleImgInput}>
        <input
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Data;
