import React from "react";
// import styled from "styled-components";

///// COMPONENTS /////

///////UI
import {
  PageLayout,
  BodyColumn1,
  BodyColumn2,
  BodyColumn3,
} from "../../../components/UI/page-layout";

import Header from "../../header.container";

const Price = () => {
  return (
    <React.Fragment>
      <Header />
      <PageLayout>
        <BodyColumn1></BodyColumn1>
        <BodyColumn2>Price</BodyColumn2>
        <BodyColumn3></BodyColumn3>
      </PageLayout>
    </React.Fragment>
  );
};

export default Price;
