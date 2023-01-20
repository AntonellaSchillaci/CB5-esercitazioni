import { FaLinkedin, FaGithubAlt, FaInstagramSquare} from 'react-icons/fa';

import './index.css';
const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
      // eslint-disable-next-line
    <a name="footer">
      <footer>{`Copyright © Anto💝  ${year}`}
      <div>
        <a href='https://www.linkedin.com/in/antonella-schillaci-872212252/'  rel="noreferrer" target="_blank">
          <FaLinkedin className="linkLogo" size={35} />
        </a>
        <a href='https://github.com/AntonellaSchillaci'  rel="noreferrer" target="_blank">
          <FaGithubAlt className="linkLogo" size={35} />
        </a>
        <a href='https://www.instagram.com/anto_nellaschilla_ci/'  rel="noreferrer" target="_blank">
          <FaInstagramSquare className="linkLogo" size={35} />
        </a>
      </div>
      </footer>
     </a>
    )
  };
  
  export default Footer;