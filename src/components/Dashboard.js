import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WebsitesList from './WebsitesList';
import CredentialInfo from './CredentialInfo';
import CredentialsNavbar from './CredentialsNavbar';

const Dashboard = props => {
  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <CredentialsNavbar
            credentialsCategory={props.credentialsCategory}
            handleCategoryClick={props.handleCategoryClick}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <WebsitesList
            credentailsArray={props.credentailsArray}
            handleShowInfoClick={props.handleShowInfoClick}
            displayedCredentials={props.credentialsInfo}
          />
        </Col>
        <Col xs={8}>
          <CredentialInfo
            info={props.credentialsInfo}
            handleRemoveCredential={props.handleRemoveCredential}
            credentialsCategory={props.credentialsCategory}
            handleShareCredential={props.handleShareCredential}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
