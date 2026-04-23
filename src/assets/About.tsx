import { useEffect } from "react";
import img from "../images/Image.png";
import "../styles/contact.css";

export default function About() {
  // set page title
  useEffect(() => {
    document.title = "About | Kit Portfolio";
  }, []);

  return (
    <>
      {/* ===== About Section ===== */}
      <section className="about">

        {/* left content */}
        <div className="a-left">
          <h2>
            <span className="has">{"<!>"}</span> Who I am ?
          </h2>

          <h5>Hello, I am Ankit.</h5>

          {/* intro text */}
          <p className="a-text">
            Not perfect, not an expert — just someone who enjoys building and learning.
          </p>

          {/* second paragraph */}
          <p className="a-text">
            Passionate about DSA and writing efficient code. I practice regularly to improve logic.
          </p>
        </div>

        {/* right image */}
        <div className="a-right">
          <img src={img} alt="profile" />
        </div>

      </section>

      {/* ===== Skills Section ===== */}
      <section className="skills">
        <h3 className="headdd">
          <span className="has">#</span>Skills {"<~>"}
        </h3>

        <div className="a-boxes">

          {/* Languages */}
          <div className="a-box">
            <h5 className="a-b-head">
              <span className="has">{"<!>"}</span> Languages
            </h5>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>

          {/* Web */}
          <div className="a-box">
            <h5 className="a-b-head">
              <span className="has">{"<!>"}</span> Web Technologies
            </h5>
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

          {/* Tools */}
          <div className="a-box">
            <h5 className="a-b-head">
              <span className="has">{"<!>"}</span> Tools & Platforms
            </h5>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>

          {/* Concepts */}
          <div className="a-box">
            <h5 className="a-b-head">
              <span className="has">{"<!>"}</span> Concepts
            </h5>
            <ul>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Problem Solving</li>
              <li>REST APIs</li>
              <li>Edge Cases</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== Fun Facts ===== */}
      <section className="fun-cont">
        <h3 className="headdd">
          <span className="has">#</span>my-fun-facts {"<~>"}
        </h3>

        <div className="fun">
          <span className="f-facts">I like winter more than summer</span>
          <span className="f-facts">I enjoy bike rides</span>
          <span className="f-facts">Tea over coffee</span>
          <span className="f-facts">Love Interstellar</span>
          <span className="f-facts">“One more bug” → 3am</span>
        </div>
      </section>
    </>
  );
}