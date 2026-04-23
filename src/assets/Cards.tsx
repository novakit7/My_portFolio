import { useState } from "react";
import "../styles/Projects.css";
interface CardProps {
  title: string;
  description: string;
  details: string;
  image: string;
  link?: string;
}

export default function Card({
  title,
  description,
  details,
  image,
  link
} : CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="card-container" 
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`card ${flipped ? "flipped" : ""}`}>

        {/* FRONT */}
        <div className="card-front">
          <div className="card-image">
            <img src={image} alt={title} />
          </div>

          <h2>{title}</h2>
          <p>{description}</p>

          <span className="card-action">Click to view →</span>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h2>{title}</h2>
          <p>{details}</p>

          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              🔗 Visit Project
            </a>
          )}

          <span className="card-action">← Back</span>
        </div>

      </div>
    </div>
  );
}