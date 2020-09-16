import React from "react";

export default (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: "rgba(0,0,0,0)",
        zIndex: "100",
        position: "fixed",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
    </div>
  );
};
