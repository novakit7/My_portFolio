import { useEffect } from "react";
export default function About() {
    useEffect(() => {
        document.title = "About | Kit Portfolio";
    }, []);
  return (
    <div>
      <div className="left-cont">
        <h1><span className="has">/</span>About-me</h1>
        <h4>Who I am ?</h4>
        <div>Not perfect, not an expert — just someone who genuinely enjoys building things and learning how they work.
            I started coding out of curiosity, and over time it became something more — a way to create, solve problems, and express ideas.
            I like experimenting, trying new things, and sometimes failing — because that’s where real learning happens.
            Still learning. Still building. Still figuring things out.
            Feel free to reach out — I’m always open to connecting.
        </div>
      </div>
    </div>
  )
}
