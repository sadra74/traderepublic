import React from 'react';
import { ReadyState } from 'react-use-websocket';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const WebSocketDemo = ({ readyState }) => {
  // Public API that will echo messages sent to it back to the client

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <span>
        The WebSocket is currently
        {' '}
        {connectionStatus}
      </span>
    </div>
  );
};

export default WebSocketDemo;

WebSocketDemo.propTypes = {
  readyState: PropTypes.string.isRequired,
};
