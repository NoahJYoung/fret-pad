import { React } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login, setLoading } from "../../features/appSlice";
import "../../css/SignUpModal.css";

const SignUpModal = (props) => {
  const dispatch = useDispatch();
  if (!props.show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    if (event.target.pass.value === event.target.passConfirm.value) {
      axios
        .post("/new-user", {
          email: event.target.email.value,
          username: event.target.username.value,
          password: event.target.pass.value,
        })
        .then((res) => {
          const user = {
            email: res.data.email,
            username: res.data.username,
            password: res.data.password,
            id: res.data._id,
            documents: res.data.documents,
          };
          dispatch(setLoading(false));
          dispatch(login(user));
          props.onClose();
        })
        .catch((err) => {
          dispatch(setLoading(false));
          alert(err.response.data.error);
        });
    } else {
      dispatch(setLoading(false));
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
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" required />
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
