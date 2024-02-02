import React from "react";

export default function Sunset(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();
  return (
    <>
      {hours}:{minutes}
    </>
  );
}
