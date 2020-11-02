import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
  return (
    <TitleContainer>
      <Title>{props.children}</Title>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 45vw;
  height: 140px;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #707070;

  /* margin-left: 13.78rem; */
`;

const Title = styled.span`
  font-family: Arimo;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;

  margin-bottom: 1.34rem;
  margin-top: auto;
`;

export default PageTitle;
