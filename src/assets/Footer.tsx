import leetcode from '../images/leetcode.svg'
import email from '../images/Email.svg'
import github from '../images/Github.svg'
import linkedin from '../images/Linkedin.svg'
import { Link } from 'react-router'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
     });
};
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div>
                    Ankit Verma
                    <a href="mailto:ankivermajnva@gmail.com?subject=Project Inquiry&body=Hi Kit, I want to discuss a project." className='footer-img back-to-top'><img src={email}/>ankivermajnva@gmail.com</a>
                </div>
                <div>Turning ideas into code — Kit  </div>
            </div>
            <div>
                <Link className="mx-2 back-to-top" to="project">Projects</Link>
                <Link className="mx-2 back-to-top" to="about">About-me</Link>
                <Link className="mx-2 back-to-top" to="contact">contact</Link>

            </div>
            <div className="footer-right">
                <div className='media'>Media</div>
                <div className='footer-links'>
                    <a title="LinkedIn - connect me." href="https://www.linkedin.com/in/ankit-verma-04a3051b7/" target="_blank" rel="noopener noreferrer" className="footer-img"><img src={linkedin}/></a>
                    <a title="LeetCOde - a coding plateform. " href="https://leetcode.com/u/novakit/" target="_blank" rel="noopener noreferrer" className="footer-img"><img src={leetcode}/></a>
                    <a title="GitHub - View my work" href="https://github.com/novakit7" target="_blank" rel="noopener noreferrer" className="footer-img"><img src={github}/></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            © 2026 Kit. All rights reserved.
            <div onClick={scrollToTop} className="back-to-top"><i className="fa-solid fa-arrow-up"></i>BACK TO TOP</div>
        </div>
    </div>
  )
}
