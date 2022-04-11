import { React } from "react";
import "../css/SignUpModal.css";

const SignUpModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="signUpModal">
      <div className="signUpModalContent">
        <form className="signUpForm">
          <p>Email:</p>
          <input type="text" />
          <p>Password:</p>
          <input id="pass" type="password" />
          <p>Confirm password: </p>
          <input id="passConfirm" type="password" />
          <button className="signUpFormBtn" id="formSubmit" onClick={(e) => e.preventDefault()}>
            Sign up
          </button>
          <button className="signUpFormBtn" onClick={props.onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
