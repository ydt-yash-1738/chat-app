import React, { useContext, useState } from 'react';
import { SocketContext } from '../SocketContext'; // Update this with the correct path to your context

const Options = () => {
  const { me, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const handleCallUser = () => {
    // Ensure that an ID is entered before making the call
    if (idToCall.trim() !== '') {
      callUser(idToCall);
    }
  };

  return (
    <div className="options-container">
      <div>
        <label>Your ID: {me}</label>
      </div>
      <div>
        <label>Call ID:</label>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          placeholder="Enter ID to call"
        />
      </div>
      <button onClick={handleCallUser}>Call</button>
    </div>
  );
};

export default Options;
