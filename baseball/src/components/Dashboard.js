import React from "react";

const Dashboard = props => {
  return (
    <>
    <div>
      <button onClick={props.strike}>Add Strike</button>
      <button onClick={props.foul}>Add Foul</button>
      <button onClick={props.ball}>Add Ball</button>
      <button onClick={props.hit}>Add Hit</button>
      </div>
    </>
  );
};
export default Dashboard;