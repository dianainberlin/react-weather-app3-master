import React from "react";

export default function Sunrise(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();
  return (
    <>
      {hours}:{minutes}
    </>
  );
}
