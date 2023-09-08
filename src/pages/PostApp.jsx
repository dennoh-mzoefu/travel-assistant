import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

function PostApp() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Body />
    </div>
  );
}

export default PostApp;
