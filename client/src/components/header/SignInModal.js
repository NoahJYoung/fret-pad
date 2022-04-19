import { React } from "react";
import { useDispatch } from "react-redux";
import { login, setLoading } from "../../features/appSlice";
import axios from "axios";
import "../../css/SignInModal.css";

const SignInModal = (props) => {
  const dispatch = useDispatch();
  if (!props.show) {
    return null;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    axios
      .post("/login", {
        email: event.target.email.value,
        password: event.target.pass.value,
      })
      .then((res) => {
        if (res.data !== "") {
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
        } else {
          dispatch(setLoading(false));
          alert("Incorrect email or password");
        }
      });
  };
  return (
    <div className="signInModal">
      <div className="signInModalContent">
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
          className="signInForm"
        >
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" required />
          <label htmlFor="pass">Password:</label>
          <input name="pass" type="password" required />
          <button type="submit" className="signInFormBtn" id="formSubmit">
            Sign in
          </button>
          <button
            type="button"
            className="signInFormBtn"
            onClick={props.onClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
