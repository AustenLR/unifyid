import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';

class SmartDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleShowInfoClick = this.handleShowInfoClick.bind(this);
    this.handleRemoveCredential = this.handleRemoveCredential.bind(this);
    this.handleShareCredential = this.handleShareCredential.bind(this);
    this.state = {
      own_credentials: [
        {
          website: 'google.com',
          username: 'johndoe@gmail.com',
          password_id: '#jknkjndsjk$SSD'
        },
        {
          website: 'facebook.com',
          username: 'johndoe@gmail.com',
          password_id: 'nnjnnnc#D'
        },
        {
          website: 'reddit.com',
          username: 'thejohndoe',
          password_id: '#)_2-==23D'
        },
        {
          website: 'wellsfargo.com',
          username: 'johndoebanks',
          password_id: 'iuh!@@22'
        },
        {
          website: 'netflix.com',
          username: 'johndoeandchill',
          password_id: '(*#$2k$SSD'
        },
        {
          website: 'play.hbogo.com',
          username: 'johndoewatchesgameofthrones',
          password_id: '23789$$SSD'
        }
      ],
      shared_with_me: [
        {
          website: 'youtube.com',
          username: 'macklemore299',
          password_id: '(*#$2k$SSD',
          lender_user_id: 'macklemore'
        },
        {
          website: 'hulu.com',
          username: 'lorenzo789',
          password_id: '23789$$SSD',
          lender_user_id: 'lorenzochello'
        }
      ],
      shared_with_others: [
        {
          website: 'netflix.com',
          username: 'johndoeandchill',
          password_id: '(*#$2k$SSD',
          borrower_user_id: 'thefriendofjohndoe'
        },
        {
          website: 'play.hbogo.com',
          username: 'johndoewatchesgameofthrones',
          password_id: '23789$$SSD',
          borrower_user_id: 'gotfan'
        }
      ],
      username: 'johndoe19',
      name: 'John Doe',
      credentialsCategory: 'own_credentials',
      credentialsInfo: null
    };
  }

  handleCategoryClick(category) {
    this.setState({
      credentialsCategory: category,
      credentialsInfo: null
    });
  }

  handleShowInfoClick(website) {
    let infoObject = this.state[this.state.credentialsCategory].filter(
      credentailsObj => credentailsObj.website === website
    )[0];
    this.setState({
      credentialsInfo: infoObject
    });
  }

  handleRemoveCredential(website) {
    const credentialsCategory = this.state.credentialsCategory;
    const credentialsArray = this.state[credentialsCategory];
    const updatedCredentialsArray = credentialsArray.filter(
      credntialObject => credntialObject.website !== website
    );
    let updatedObj = {};
    updatedObj[credentialsCategory] = updatedCredentialsArray;
    //if deleting from 'own_credentials', remove any shared logins for that website
    if (credentialsCategory === 'own_credentials') {
      const updatedSharedArray = this.state.shared_with_others.filter(
        credntialObject => credntialObject.website !== website
      );
      updatedObj.shared_with_others = updatedSharedArray;
    }
    updatedObj.credentialsInfo = null;
    this.setState(updatedObj);
  }

  handleShareCredential(obj) {
    let sharedCredentialsArray = this.state.shared_with_others.slice();
    let alreadySharedWebsite = false;
    for (var i = 0; i < sharedCredentialsArray.length; i++) {
      if (sharedCredentialsArray[i].website === obj.website) {
        const additionalBorrower = ', ' + obj.borrower_user_id;
        sharedCredentialsArray[i].borrower_user_id += additionalBorrower;
        alreadySharedWebsite = true;
      }
    }
    if (!alreadySharedWebsite) sharedCredentialsArray.push(obj);
    this.setState({ shared_with_others: sharedCredentialsArray });
  }

  render() {
    const credentailsArray = this.state[this.state.credentialsCategory];
    return (
      <Dashboard
        handleCategoryClick={this.handleCategoryClick}
        handleShowInfoClick={this.handleShowInfoClick}
        handleRemoveCredential={this.handleRemoveCredential}
        credentialsCategory={this.state.credentialsCategory}
        credentailsArray={credentailsArray}
        credentialsInfo={this.state.credentialsInfo}
        handleShareCredential={this.handleShareCredential}
      />
    );
  }
}

export default SmartDashboard;
