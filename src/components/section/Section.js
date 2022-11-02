import React from "react";
import styled from "styled-components";
const Section = () => {
  return (
    <div>
      <DIV>
        <DIVSelect>
          <div>
            <select>
              <option value="Status">Status</option>
            </select>
          </div>
          <div>
            <select>
              <option value="Price">Price</option>
            </select>
          </div>
          <div>
            <select>
              <option value="Collections">Collections</option>
            </select>
          </div>
          <div>
            <select>
              <option value="Chains">Chains</option>
            </select>
          </div>
          <div>
            <select>
              <option value="Categories">Categories</option>
            </select>
          </div>
          <div>
            <select>
              <option value="Sale">Sale</option>
            </select>
          </div>
        </DIVSelect>
      </DIV>
    </div>
  );
};

const DIV = styled("div")`
  width: 249px;
  height: 1080px;
  background-color: #25272e;
`;
const DIVSelect = styled("div")`
  width: 205px;
  height: 252px;
  border-radius: 2px;
  margin: auto;

  & div select {
    width: 205px;
    height: 32px;
    background: none;
    border: none;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    outline: none;
    border-bottom: 1px solid #383940;
  }
`;
export default Section;
