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
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;