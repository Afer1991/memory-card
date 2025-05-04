import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

  return(
    <footer className="footer">
      <a href="https://github.com/Afer1991" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer