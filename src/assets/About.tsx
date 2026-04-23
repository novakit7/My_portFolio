import { useEffect } from "react";
import img from '../images/Image.png'
import '../styles/contact.css'
export default function About() {
    useEffect(() => {
        document.title = "About | Kit Portfolio";
    }, []);
  return (
    <>
    <div className="about">
      <div className="a-left">
        <h2><span className="has">//</span>Who I am ?</h2>
        <h5>Hello I am Ankit..</h5>
        <div className="a-text">
          Not perfect, not an expert — just someone who genuinely enjoys building things and learning how they work.
          Still learning. Still building. Still figuring things out.
          <div className="a-text">Passionate about Data Structures & Algorithms, with a focus on writing efficient and optimized code.
              Regularly solving problems to strengthen logic, patterns, and problem-solving skills.</div>
        </div>
      </div>
      <div className="a-right"><img src = {img} alt="cover" /></div>
    </div>
    {/* skills section*/}
    <div className="skills">
      <h3 className="headdd"><span className="has">#</span>Skills{"<~>"}</h3>
      <div className="a-boxes">
        <div className="a-box">
          <h5 className="a-b-head"><span className="has">{"<!>"}</span>Languages</h5>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>C</li>
          </ul>
        </div>
        <div className="a-box">
          <h5 className="a-b-head"><span className="has">{"<!>"}</span>Web Technologies</h5>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="a-box">
          <h5 className="a-b-head"><span className="has">{"<!>"}</span>Tools & Platforms</h5>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>

        </div>
        <div className="a-box">
          <h5 className="a-b-head"><span className="has">{"<!>"}</span>Concepts</h5>
          <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Problem Solving</li>
            <li>REST APIs</li>
            <li>Edge Case Handling</li>
          </ul>
        </div>
      </div>
    </div>

    {/* funfact */}
    <div className="fun-cont">
      <h3 className="headdd"><span className="has">#</span>my-fun-facts{"<~>"}</h3>
      <div className="fun">
        <span className="f-facts">I like winter more than summer...</span>
        <span className="f-facts">I often bike with my friends...</span>
        <span className="f-facts">I prefer tea over coffee...</span>
        <span className="f-facts">I love the movie Interstellar...</span>
        <span className="f-facts">I say “just one more bug” and then it’s 3am...</span>
        <span className="f-facts">I imagine fake scenarios while listening to music...</span>
        <span className="f-facts">I enjoy watching rain for a long time...</span>
        <span className="f-facts">I prefer reading over scrolling (sometimes..)</span>
        <span className="f-facts">I enjoy the adrenaline during matches...</span>
        <span className="f-facts">I love being around nature and greenery...</span>
      </div>
    </div>
    </>
  )
}
