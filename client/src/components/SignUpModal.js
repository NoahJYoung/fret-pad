import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../features/appSlice";
import "../css/SignUpModal.css";

const SignUpModal = (props) => {
  const state = useSelector((state) => state.value.user);
  const dispatch = useDispatch();
  if (!props.show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.pass.value === event.target.passConfirm.value) {
      axios
        .post("http://localhost:9000/new-user", {
          email: event.target.email.value,
          password: event.target.pass.value,
        })
        .then((res) => {
          const user = { email: res.data.email, documents: res.data.documents };
          dispatch(login(user));
          props.onClose();
        });
    } else {
      alert("passwords don't match");
    }
  };

  return (
    <div className="signUpModal">
      <div className="signUpModalContent">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="signUpForm"
        >
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" required />
          <label htmlFor="pass">Password:</label>
          <input name="pass" type="password" required />
          <label htmlFor="passConfirm">Confirm password: </label>
          <input name="passConfirm" type="password" required />
          <button className="signUpFormBtn" id="formSubmit" type="submit">
            Sign up
          </button>
          <button
            type="button"
            className="signUpFormBtn"
            onClick={props.onClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
