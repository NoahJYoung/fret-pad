import { React } from "react";
import "../css/SignInModal.css";

const SignInModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="signInModal">
      <div className="signInModalContent">
        <form className="signInForm">
          <p>Email:</p>
          <input type="text" />
          <p>Password:</p>
          <input id="pass" type="password" />
          <button className="signInFormBtn" id="formSubmit" onClick={(e) => e.preventDefault()}>
            Sign in
          </button>
          <button className="signInFormBtn" onClick={props.onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
