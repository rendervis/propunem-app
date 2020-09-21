import styled, { css } from "styled-components";

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  border-bottom: 2px solid rgba(242, 242, 242, 1);
  display: grid;
  grid-template-columns: 222px 1052px 646px;
`;
export const BodyColumn1 = styled.div`
  ${(props) =>
    props.col1 &&
    css`
      grid-column-start: 1;
    `}
`;
export const BodyColumn2 = styled.div`
  ${(props) =>
    props.col2 &&
    css`
      grid-column-start: 2;
    `}
`;
export const BodyColumn3 = styled.div`
  ${(props) =>
    props.col3 &&
    css`
      grid-column-start: 3;
    `}
`;
