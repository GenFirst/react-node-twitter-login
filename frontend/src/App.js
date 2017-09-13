import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';

class App extends Component {

  constructor() {
    super();

    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(body) {
    alert(JSON.stringify(body));
  }

  onFailed(error) {
    alert(error);
  }

  render() {
    return (
      <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
        onFailure={this.onFailed} onSuccess={this.onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
    );
  }
}

export default App;
