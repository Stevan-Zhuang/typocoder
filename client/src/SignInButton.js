import React from "react";

class SignInButton extends React.Component {
  handleSignIn = () => {
    window.location.href = "/auth/google";
  };

  render() {
    return <button onClick={this.handleSignIn}>Sign in with Google</button>;
  }
}

export default SignInButton;
