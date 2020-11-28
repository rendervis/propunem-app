import styled from "styled-components";

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 12fr 56fr 32fr;
`;
// grid-template-columns: 222px 1052px 646px;
export const BodyColumn1 = styled.div`
  grid-column-start: 1;
  /* display: flex; */
  padding: 7vh 0;
`;
export const BodyColumn2 = styled.div`
  grid-column-start: 2;
  /* display: flex; */
  padding: 7vh 0;
`;
export const BodyColumn3 = styled.div`
  grid-column-start: 3;
  /* display: flex; */
  padding: 7vh 0;
`;
