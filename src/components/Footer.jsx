import FB from "../assets/icon-facebook.svg";
import TW from "../assets/icon-twitter.svg";
import PIN from "../assets/icon-pinterest.svg";
import IG from "../assets/icon-instagram.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Shortly</h2>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Links</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-socials">
          <a href="#">
            <img src={FB} alt="Facebook" />
          </a>
          <a href="#">
            <img src={TW} alt="Twitter" />
          </a>
          <a href="#">
            <img src={PIN} alt="Pinterest" />
          </a>
          <a href="#">
            <img src={IG} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
