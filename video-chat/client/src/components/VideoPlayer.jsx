import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  useEffect(() => {
    // Update the local video stream when it changes
    if (myVideo.current) {
      myVideo.current.srcObject = stream;
    }
  }, [stream, myVideo]);

  return (
    <div className="video-container">
      {stream && (
        <>
          <p>{name}</p>
          <video playsInline muted ref={myVideo} autoPlay />
        </>
      )}
      {callAccepted && !callEnded && (
        <>
          <p>{call.name}</p>
          <video playsInline ref={userVideo} autoPlay />
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
