import React from "react";
import Heroimage from "./general/Heroimage";
import Client from "./general/Client";
import Social from "./general/SocialMedia";
import Project from "./general/Project";
import Brandnew from "./general/Brandnew";
import Video from "./general/Video";

function Home() {
  return (
    <>
      <Heroimage />
      <Brandnew />
      <Client />
      <Social />
      <Project />
      <Video />
    </>
  );
}

export default Home;
