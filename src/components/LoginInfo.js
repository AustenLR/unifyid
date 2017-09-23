import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const LoginInfo = props => {
  const onRemoveClick = e => props.handleRemoveCredential(props.info.website);
  const password = props.info.password_id.split('').fill('x');
  const buttonText =
    props.credentialsCategory === 'own_credentials'
      ? 'Delete'
      : 'Remove Share Access';

  let borrowerOrPassword = null;
  if (props.info.borrower_user_id) {
    borrowerOrPassword = (
      <Row>
        <Col xs={12}>
          <h3>Borrower(s):</h3>
          <h4>
            {props.info.borrower_user_id}
          </h4>
        </Col>
      </Row>
    );
  } else if (props.info.lender_user_id) {
    borrowerOrPassword = (
      <Row>
        <Col xs={12}>
          <h3>Lender:</h3>
          <h4>
            {props.info.lender_user_id}
          </h4>
        </Col>
      </Row>
    );
  } else {
    borrowerOrPassword = (
      <Row>
        <Col xs={12}>
          <h3>Password: </h3>
          <h4>
            {password}
          </h4>
        </Col>
      </Row>
    );
  }
  return (
    <div>
      <Row>
        <Col xs={12}>
          <h2>Login Info</h2>
          <hr />
          <h3>URL: </h3>
          <h4>
            https://www.{props.info.website}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>User Name: </h3>
          <h4>
            {props.info.username}
          </h4>
        </Col>
      </Row>
      {borrowerOrPassword}
      <Row>
        <Col xs={12}>
          <Button bsStyle="danger" onClick={onRemoveClick}>
            {buttonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LoginInfo;
