import styled, { css } from "styled-components";

export const ProfileBodyGrid = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;

  /* padding: 79px 224px 79px 224px; */
  display: grid;
  grid-template-columns: 12fr 56fr 32fr;
`;

export const col1 = (props) =>
  props.col1 &&
  css`
    grid-column-start: 1;
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
  width: 45vw;
  height: 140px;
  display: flex;
  flex-direction: row;

  border-bottom: solid 1px #707070;
`;

export const SecondaryMenu = styled.div`
  /* width: 10.36rem; */
  height: 100%;
  width: 78.93vw;

  /* margin-right: 1.75rem; */
  /* margin-left: auto; */

  padding-bottom: 2rem;
  padding-top: 9%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const MenuGrid = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 50fr 11fr 11fr 11fr 11fr 6fr;
`;
export const HalfGrid = styled.div`
  grid-column-start: 1;
  display: flex;
`;
export const Column1 = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Column2 = styled.div`
  grid-column-start: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Column3 = styled.div`
  grid-column-start: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Column4 = styled.div`
  grid-column-start: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridRightMargin = styled.div`
  grid-column-start: 6;
`;
export const ArrowOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TextTopBar = styled.p`
  /* padding: 0 1.81rem; */

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
