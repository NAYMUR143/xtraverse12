import React, { useState } from "react";
import Router, { useRouter } from "next/router";

const Datatake = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const route = useRouter();
  const {
    query: { name, age, job, company },
  } = route;
  const props = {
    name,
    age,
    job,
    company,
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   Router.push({
  //     pathname: "/dataTake2",
  //     query: { image, email, text },
  //   });
  // };

  return (
    <div>
      <h1 style={{ color: "#000" }}>
        {props.name} {props.job}
      </h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Datatake;
