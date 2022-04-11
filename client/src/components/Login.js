import { React, useState } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import "../css/Login.css";

const Login = () => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <div className="login">
      <button onClick={() => setSignInModal(true)}>{"Sign In"}</button>
      <button onClick={() => setSignUpModal(true)}>{"Create Account"}</button>
      <SignUpModal onClose={() => setSignUpModal(false)} show={signUpModal} />
      <SignInModal onClose={() => setSignInModal(false)} show={signInModal} />
    </div>
  );
};

export default Login;
