import React, { Component } from 'react';
import { ControlLabel, FormControl, Button } from 'react-bootstrap';

class Sharing extends Component {
  constructor(props) {
    super(props);
    this.handleUnifyIdInput = this.handleUnifyIdInput.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.state = {
      unifyIdInput: ''
    };
  }

  handleUnifyIdInput(e) {
    this.setState({ unifyIdInput: e.target.value });
  }

  sendInvite(e) {
    e.preventDefault();
    if (this.state.unifyIdInput.indexOf(' ') !== -1) {
      window.alert('Invalid unifyId - cannot contain spaces.  Please resubmit');
      return;
    }
    const obj = Object.assign({}, this.props.info, {
      borrower_user_id: this.state.unifyIdInput
    });
    this.props.handleShareCredential(obj);
    this.setState({ unifyIdInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.sendInvite}>
        <h2>Sharing</h2>
        <hr />
        <ControlLabel>UnifyId</ControlLabel>
        <FormControl
          id="formControlsUnifyId"
          type="text"
          placeholder="Enter the receiver's UnifyId"
          onChange={this.handleUnifyIdInput}
          value={this.state.unifyIdInput}
        />
        <Button type="submit">Send Invitiation</Button>
      </form>
    );
  }
}

export default Sharing;
