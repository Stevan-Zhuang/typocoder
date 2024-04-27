import React from "react";

class SignInButton extends React.Component {
  handleSignIn = () => {
    window.location.href = process.env.REACT_APP_AUTH_URL;
  };

  render() {
    return <button onClick={this.handleSignIn}>Sign in with Google</button>;
  }
}

export default SignInButton;
