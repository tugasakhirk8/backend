import React from "react";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">Halo, {user && user.name && user.name}</h2>
    </div>
  );
};

export default Welcome;
