import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import SectionCard from "../../components/section/SectionCard";
function All() {
  return (
    <div>
      <Header />
      <DIV>
        <Section />
        <SectionCard />
      </DIV>
    </div>
  );
}
const DIV = styled("div")`
  display: flex;
  width: 1322px;
  margin: auto;
`;
export default All;
