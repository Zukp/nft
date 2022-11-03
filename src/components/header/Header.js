import React from "react";
import styled from "styled-components";
import icons from "../../components/icons/Elements (1).png";
import icon from "../../components/icons/Elements (2).png";
import ico from "../../components/icons/Elements.png";
import adam from "../../components/icons/bg.png";

const Header = () => {
  return (
    <div>
      <DIV>
        <H1>Mintify</H1>

        <div>
          <UL>
            <li>Dashboard</li>
            <li>About Us</li>
            <li>FAQ</li>
          </UL>
        </div>

        <FOOD>
          <DIVStyle>
            <div>
              <img src={icons} alt="photo" />
            </div>
            <div>
              <img src={icon} alt="photo" />
            </div>
            <div>
              <img src={ico} alt="photo" />
            </div>
          </DIVStyle>

          <DivUSER>
            <img src={adam} alt="photo" />
            <h1>Leslie Alexander</h1>
          </DivUSER>
        </FOOD>
      </DIV>
    </div>
  );
};
const DIV = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  height: 70px;
  background: #25272e;
  border: 1px solid #383940;
  margin: auto;
  padding: 10px;
`;
const DIVStyle = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 114px;
  & div img {
    cursor: pointer;
  }
`;
const H1 = styled("h1")`
  width: 67px;
  height: 27px;
  color: #38f2af;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 24px;
  color: #38f2af;
  cursor: pointer;
`;
const DivUSER = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 143px;
  & img {
    display: flex;
    align-items: center;
    text-align: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  & h1 {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-align: center;
    cursor: pointer;
  }
`;
const FOOD = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 300px;
`;
const UL = styled("ul")`
  display: flex;
  justify-content: space-between;
  width: 266px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  flex: none;
  color: white;
  order: 0;
  flex-grow: 0;
  margin-left: -310px;
  & li {
    list-style: none;
    cursor: pointer;
  }
  & li:hover {
    color: #38f2af;
    border-bottom: 2px solid #38f2af;
    height: 40px;
  }
`;
export default Header;
