import "./index.css";

function Navbar() {
    return (
        <nav className="Navbar">
          <a href="/">
            <img className="logo" src="./images/logoCheep.png" alt="logo" />
          </a>
          <div className="menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;