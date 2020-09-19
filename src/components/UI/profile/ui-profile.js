import styled, { css } from "styled-components";

export const ProfileBody = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  /* padding: 79px 224px 79px 224px; */
  display: grid;
  grid-template-columns: 222px 1052px 646px;
`;
export const col1 = (props) =>
  props.col1 &&
  css`
    padding: 79px 0;
  `;
export const col2 = (props) =>
  props.col2 &&
  css`
    // background-color: red;
    grid-column-start: 2;
    padding: 79px 0;
  `;
export const col3 = (props) =>
  props.col3 &&
  css`
    grid-column-start: 3;
    padding: 79px 0;
  `;

export const TopContainer = styled.div`
  width: 864px;
  height: 140px;
  display: flex;
  flex-direction: row;

  border-bottom: solid 1px #707070;
`;

export const SecondaryMenu = styled.div`
  /* width: 10.36rem; */
  height: 100%;

  margin-right: 1.75rem;
  margin-left: auto;

  padding-bottom: 2rem;
  padding-top: 9%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: ;
`;

export const ArrowOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TextTopBar = styled.p`
  padding: 0 1.81rem;

  font-family: "Arimo";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #000000;
  text-align: center;
`;
