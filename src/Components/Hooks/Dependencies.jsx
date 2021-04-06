import React, { useState } from "react";
import Container from "Components/Container";
// import Button from "Components/Button";

const Dependencies = (props) => {
  const [name, setName] = useState("John");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container className="text-align-center">
      <h2>{name}</h2>
      <input
        className="input "
        type="text"
        value={name}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Dependencies;
