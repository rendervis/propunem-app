import React from "react";
import CustomButton from "../components/custom-button/custom-button";

class GoogleAuth extends React.Component {
  renderAuthButton() {
    return (
      <li style={{ marginBottom: "9px" }}>
        <CustomButton>
          <a href="/auth/google">Sign In With Google</a>
        </CustomButton>
      </li>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
