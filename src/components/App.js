import React from "react";
import VideoInfo from "./VideoInfo";


// DATA
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo dataObj={video}/>
    </div>
    
  );
}

export default App;
