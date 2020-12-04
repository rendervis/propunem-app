import React from "react";

import styled from "styled-components";

const OverlayBackground = ({ children, ...props }) => {
  return (
    <ModalStyled onClick={props.onClick} {...props}>
      <div {...props} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalStyled>
  );
};

const ModalStyled = styled.div`
  background-color: ${(props) => props.backgroundColor || "rgba(0,0,0,0)"};
  /* -webkit-backdrop-filter: blur(10px); */
  backdrop-filter: ${(props) => (props.blur ? `blur(1px)` : "")};
  z-index: 100;
  position: fixed;
  width: ${(props) => props.width || "100%"};
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default OverlayBackground;

// blur(1px);
