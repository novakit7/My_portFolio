import leetcode from '../images/leetcode.svg'
import email from '../images/Email.svg'
import github from '../images/Github.svg'
import linkedin from '../images/Linkedin.svg'
import { Link } from 'react-router'
import '../styles/footer.css'

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="name">Ankit Verma</div>

          <a
            href="mailto:ankivermajnva@gmail.com?subject=Project%20Inquiry&body=Hi%20Kit,%20I%20want%20to%20discuss%20a%20project."
            className="footer-img email-link"
          >
            <img src={email} alt="email" />
            ankivermajnva@gmail.com
          </a>

          <div className="tagline">
            Turning ideas into code — Kit
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-nav">
          <Link onClick={scrollToTop} className="back-to-top" to="/projects">My-projects</Link>
          <Link onClick={scrollToTop} className="back-to-top" to="/about">About-me</Link>
          <Link onClick={scrollToTop} className="back-to-top" to="/contact">Contact-me</Link>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="media">Media</div>

          <div className="footer-links">
            <a
              title="LinkedIn - connect me"
              href="https://www.linkedin.com/in/ankit-verma-04a3051b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a
              title="LeetCode - coding platform"
              href="https://leetcode.com/u/novakit/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            >
              <img src={leetcode} alt="leetcode" />
            </a>

            <a
              title="GitHub - view my work"
              href="https://github.com/novakit7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Kit. All rights reserved.</div>
        <button onClick={scrollToTop} className="glass-btn">Back to top</button>
      </div>
    </footer>
  );
}