import React from "react";

export default function Body(props) {
  return (
    <div>
      <p>This is a body</p>
      <p>Below this is from props</p>
      <p>The Worst Husbando is {props.name}</p>
    </div>
  );
}
