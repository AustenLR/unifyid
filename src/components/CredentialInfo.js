import React from 'react';
import { Col, Row, Jumbotron } from 'react-bootstrap';
import './CredentialInfo.css';
import LoginInfo from './LoginInfo';
import Sharing from './Sharing';

const CredentialInfo = props => {
  if (!props.info) {
    return (
      <div className="CredentialInfo">
        <Jumbotron>
          <h1>No Credential Currently Selected </h1>
        </Jumbotron>
      </div>
    );
  }

  const websiteName =
    props.info.website.slice(0, 1).toUpperCase() + props.info.website.slice(1);

  let loginInfoColWidth;
  let loginInfoColOffset;
  let sharing;

  if (props.credentialsCategory === 'own_credentials') {
    loginInfoColWidth = 4;
    loginInfoColOffset = 1;
    sharing = (
      <Col xs={4} xsOffset={1}>
        <Sharing
          info={props.info}
          handleShareCredential={props.handleShareCredential}
        />
      </Col>
    );
  } else {
    loginInfoColWidth = 6;
    loginInfoColOffset = 2;
    sharing = null;
  }
  return (
    <div className="CredentialInfo">
      <Jumbotron>
        <Row>
          <Col xs={12}>
            <h1>
              {websiteName}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={loginInfoColWidth} xsOffset={loginInfoColOffset}>
            <LoginInfo
              info={props.info}
              handleRemoveCredential={props.handleRemoveCredential}
              credentialsCategory={props.credentialsCategory}
            />
          </Col>
          {sharing}
        </Row>
      </Jumbotron>
    </div>
  );
};

export default CredentialInfo;
