import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import { ContextProvider } from "./SocketContext";
import './styles.css';


function App () {
  
  return (
    <ContextProvider>
      <Options />
      <VideoPlayer />
      <Notifications />
    </ContextProvider>
  );
}

export default App;
