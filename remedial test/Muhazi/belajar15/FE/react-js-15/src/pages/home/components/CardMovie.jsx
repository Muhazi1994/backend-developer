import React from "react";
import "../styles/cardMovie.scss";

export default function CardMovie({ ...props }) {
  const { id, title, picture } = props;
  return (
    <div className="card-container">
      <a href={`/movie/${id}`}>
        <img src={picture} alt={title} />
        <h1>{title}</h1>
      </a>
    </div>
  );
}
