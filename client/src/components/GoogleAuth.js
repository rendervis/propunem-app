import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { OAuthClientId } from "../secrets";

import { login, logout } from "../redux/actions/account";

class GoogleAuth extends React.Component {
  renderAuthButton() {
    return (
      <li>
        <a href="/auth/google">Sign In</a>
      </li>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
