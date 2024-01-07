import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { call, callAccepted, answerCall, leaveCall } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="incoming-call">
          <h1>{call.name} is calling...</h1>
          <button onClick={answerCall}>Answer</button>
          <button onClick={leaveCall}>Reject</button>
        </div>
      )}
    </>
  );
};

export default Notifications;

