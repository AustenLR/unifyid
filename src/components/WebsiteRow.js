import React from 'react';
import { Panel } from 'react-bootstrap';

const WebsiteRow = props => {
  const onShowInfoClick = event => props.handleShowInfoClick(props.website);
  var background;
  if (
    props.displayedCredentials &&
    props.displayedCredentials.website === props.website
  ) {
    background = '#c5cfe0';
  }
  return (
    <div onClick={onShowInfoClick}>
      <Panel header={props.website} style={{ background }}>
        {props.username}
      </Panel>
    </div>
  );
};

export default WebsiteRow;
