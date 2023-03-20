import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="container-fluid bg-dark">
      <div className="container">
        <div className="row text-center pt-4">
          <div className="col-md-4">
            <h5>Follow</h5>
            <br />
            <a href="https://twitter.com/mozgencmardi" target="_blank">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://www.linkedin.com/in/ozgencmardi/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Bio</h5>
            <br />
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Pages</h5>
            <br />
            <p>
              <a href="#services">Services</a>
            </p>
            <p>
              <a href="#work">Work</a>
            </p>
            <p>
              <a href="#portfolio">Portfolio</a>
            </p>
          </div>
          <div className="col-12">
            <hr className="light" />
            &copy; 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;