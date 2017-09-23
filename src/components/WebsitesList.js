import React from 'react';
import WebsiteRow from './WebsiteRow';
import './WebsitesList.css';

const WebsitesList = props => {
  if (!props.credentailsArray) return null;
  return (
    <div className="WebsitesList">
      <ul>
        {props.credentailsArray.map(website => {
          return (
            <WebsiteRow
              key={website.website}
              website={website.website}
              username={website.username}
              handleShowInfoClick={props.handleShowInfoClick}
              displayedCredentials={props.displayedCredentials}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WebsitesList;
