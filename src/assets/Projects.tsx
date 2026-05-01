import { useEffect } from "react";
import Card from "./Cards";
import "../styles/Projects.css";
import img from "../images/project.png"

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Kit Portfolio";
  }, []);

  return (
    <>
      {/* MAIN PROJECTS */}
      <section className="projects">
        <div className="p-head">
          <h2>
            <span className="has">#</span>Projects{"<~>"}
          </h2>
          <p className="p-sub">
            Things I’ve built while learning and experimenting.
          </p>
        </div>

        <div className="p-grid">
        <Card
        title="DSA Visualizer"
        description="Visualize algorithms step by step"
        details="Built using React + animations to understand sorting algorithms."
        image={img}
        link="https://yourproject.com"
        />
        <Card
        title="DSA Visualizer"
        description="Visualize algorithms step by step"
        details="Built using React + animations to understand sorting algorithms."
        image={img}
        link="https://yourproject.com"
        />
        <Card
        title="DSA Visualizer"
        description="Visualize algorithms step by step"
        details="Built using React + animations to understand sorting algorithms."
        image={img}
        link="https://yourproject.com"
        />
        </div>
      </section>

      {/* SMALL PROJECTS */}
      <section className="small-projects">
        <h3 className="headdd">
          <span className="has">#</span>small-projects
        </h3>

        <div className="small-grid">

          <div className="small-card">
            <span className="tag">HTML CSS</span>
            <h4>CSS experiments</h4>
            <p>Collection of my different little projects in css.</p>
            <button className="glass-btn">Live{"<~>"}</button>
          </div>
          <div className="small-card">
            <span className="tag">HTML CSS</span>
            <h4>CSS experiments</h4>
            <p>Collection of my different little projects in css.</p>
            <button className="glass-btn">Live{"<~>"}</button>
          </div>
          <div className="small-card">
            <span className="tag">HTML CSS</span>
            <h4>CSS experiments</h4>
            <p>Collection of my different little projects in css.</p>
            <button className="glass-btn">Live{"<~>"}</button>
          </div>

        </div>
      </section>
    </>
  );
}