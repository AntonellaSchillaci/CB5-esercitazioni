import { useState, useEffect } from "react";
import "./index.css";

const Navbar = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("username")));
  }, []);

  const onLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

    return (
        <nav className="Navbar">
          <a href="/">
            <img className="logo" src="./images/logoCheep.png" alt="logo" />
          </a>
          <div className="menu">
            <ul className="sectionMenu">
              <li className="username">
                {username ? (
                  <img src={username.imgProfile} alt="imgProfile" />
                ) : (
                  "Login"
                )}
              </li>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li onClick={onLogout}>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;