import React from "react";

export default function P(props) {
  const { children, style } = props;
  return <p style={{ whiteSpace: "pre-wrap", ...style }}>{children}</p>;
}
