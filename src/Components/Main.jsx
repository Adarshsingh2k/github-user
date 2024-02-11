import React from "react";
import UserListContainer from "./UserListContainer";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        margin: "0 auto",
      }}
    >
      <UserListContainer />
    </div>
  );
};

export default Main;
