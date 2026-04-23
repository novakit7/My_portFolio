import { useEffect } from "react";
import '../styles/contact.css'
export default function Contact() {
    useEffect(() => {
            document.title = "Contact | Kit Portfolio";
    }, []);
  return (
    <div className="contact">
      <div className="left-cont">
        <div className="cont-text">
          <h3><span className="has">//</span>Got something in mind?</h3>
          Feel free to reach out — I’m always open to connecting.
        </div>
        <div className="all-media">
          <form  className="effect" action="https://formspree.io/f/xnjlgyjd" method="POST">
            <input className="text-area" type="text" name="name" required placeholder="Enter Your Name"/>
            <input className="text-area" type="email" name="email" required placeholder="Enter Your Email"/>
            <textarea className="text-area" name="message" required placeholder="Write your Message Here......"style={{height: "150px"}}></textarea>
            <button className="text-btn" type="submit">Start a Conversation</button>
          </form>
        </div>
      </div>
      <div className="right-cont">
        <div className="suppot">
          <div className="card1">
            <h6>Support Me Here</h6>
            <ul>
              <li>
              <a title="LinkedIn - connect me" href="https://www.linkedin.com/in/ankit-verma-04a3051b7/"
               target="_blank" rel="noopener noreferrer" className="c-links"><i className="fa-brands fa-square-linkedin"/>Linked-In</a></li>
              <li>
                <a title="GitHub - view my work" href="https://github.com/novakit7" target="_blank"
                rel="noopener noreferrer" className="c-links"><i className="fa-brands fa-github"/>GitHub</a></li>
              <li>
                <a title="LeetCode - coding platform" href="https://leetcode.com/u/novakit/" target="_blank"
                rel="noopener noreferrer" className="c-links"><i className="fa-solid fa-laptop-code"/>Leetcode</a></li>
              <li>
                <a title="codeforces - coding platform" href="https://codeforces.com/profile/ankit_verma07" target="_blank"
                rel="noopener noreferrer" className="c-links"><i className="fa-solid fa-code"/>Codeforces</a></li>
            </ul>
          </div>
          <div className="card1">
            <h6>Contact me Here</h6>
              <ul>
                <li><i className="fa-brands fa-whatsapp"/>+918299097314</li>
                <li><i className="fa-brands fa-envelope"/>ankivermajnva@gmail.com</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
