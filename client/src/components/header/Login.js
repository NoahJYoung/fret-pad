import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { logout } from "../../features/appSlice";
import "../../css/Login.css";

const Login = () => {
  const state = useSelector((state) => state.value.user);
  const dispatch = useDispatch();
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return state ? (
    <div className="userPanel">
      <h1 className="emailDisplay">{state.username}</h1>
      <button className="logoutBtn" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  ) : (
    <div className="login">
      <button onClick={() => setSignInModal(true)}>{"Sign In"}</button>
      <button onClick={() => setSignUpModal(true)}>{"Create Account"}</button>
      <SignUpModal onClose={() => setSignUpModal(false)} show={signUpModal} />
      <SignInModal onClose={() => setSignInModal(false)} show={signInModal} />
    </div>
  );
};

export default Login;
