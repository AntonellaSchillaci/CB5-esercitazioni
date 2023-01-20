import { useState} from "react";
import users from "../../utils/users";
import "./index.css";

const Login = () => {
  const [loginState, setLoginState] = useState({});

  const onFormSubmit = () => {
    if (users) {
      users.forEach((user) => {
        if (
          user.username === loginState.username &&
          user.password === loginState.password
        ) {
          localStorage.setItem(
            "username",
            JSON.stringify({ ...loginState, imgProfile: user.imgProfile })
          );
        }
      });
    }
  };

  return (
    <div className="Login">
      <form className="wrapper" onSubmit={onFormSubmit}>
      <h3 className="loginTitle">Login</h3>
        <input
          className="inputLogin"
          type="text"
          value={loginState.username}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, username: e.target.value }))
          }
          placeholder="Nome utente"
        />
        <input
          className="inputLogin"
          type="password"
          value={loginState.password}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
        />
        <input className ="buttonLogin" type="submit" value="Accedi" />
      </form>
    </div>
  );
};

export default Login;