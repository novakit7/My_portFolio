import { Link } from "react-router";
import "../styles/Home.css";
import heroImg from "../images/Image-1.png";

export default function Home() {
  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="square s1"></div>
        <div className="square s2"></div>
        <div className="dots d1"></div>

        <div className="hero-left">
          <h1>
            Ankit is a <span className="accent">web developer</span> and{" "}
            <span className="accent">problem solver</span>
          </h1>

          <p>
            I craft responsive websites where design meets logic and creativity.
          </p>

          <Link to="/contact"><button className="glass-btn">Contact me{"<~>"}</button></Link>
        </div>

        <div className="hero-right">

        <div className="img-wrapper">
          <img src={heroImg} alt="hero" />
          </div>
          <div className="status">
            <span className="dot"></span> Currently working on Project...
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="quote">
        <p>With great power comes great electricity bills… and console logs.</p>
        <span>- Dr. Who</span>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="home-section">

        <div className="section-head">
          <h2><span className="has">#</span>projects</h2>
          <Link to="/projects">View all →</Link>
        </div>

        <div className="home-grid">
          <div className="mini-card"><h5>Auth System</h5> raw authentication system</div>
          <div className="mini-card">Project 2</div>
          <div className="mini-card">Project 3</div>
        </div>

      </section>
      {/* ================= ABOUT ================= */}
      <section className="home-section about-home">

        <div className="about-left">
          <h2><span className="has">#</span>about-me</h2>

          <p>
            I’m Kit — a developer who enjoys building things and solving problems.
            Still learning, still improving.
          </p>

          <Link to="/about"><button className="glass-btn">Read more{"<~>"}</button></Link>
        </div>

      </section>

    </div>
  );
}