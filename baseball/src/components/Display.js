import React from "react";

const Display = props => {
  return (
    <>
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes: {props.strikes}</h2>
      <h2>Hits: {props.hits}</h2>
    </>
  );
};
export default Display;
