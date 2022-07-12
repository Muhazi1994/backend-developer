import React from "react";

export default function Card({ ...props }) {
  // ... -> spread operators
  const { name, phone, website } = props; // destructuring props
  return (
    <div>
      <h1
        style={
          name === "Dajjal"
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {name}
      </h1>
      <h3>{phone}</h3>
      <p>{website}</p>
    </div>
  );
}
