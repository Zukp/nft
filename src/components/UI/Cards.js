import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cards = ({ id, images, fixedPrice, text, description, price }) => {
  const [open, setOpen] = React.useState(false);
  const hoverClick = () => {
    setOpen(true);
  };
  const hoverFasle = () => {
    setTimeout(() => setOpen(false), 1000);
  };
  return (
    <div>
      <DIV>
        {open && (
          <P>
            <Link key={id} to={`/about/${id}`}>
              ПОДРОБНЕЕ...
            </Link>
          </P>
        )}
        <img
          onMouseEnter={hoverClick}
          onMouseLeave={hoverFasle}
          src={images}
          alt="photo"
        />
        <h1>{description}</h1>
        <h5>{text}</h5>
        <DIVFixed>
          <div>
            <h4>{fixedPrice}</h4>
          </div>
          <div>
            <button>{price}</button>
          </div>
        </DIVFixed>
      </DIV>
    </div>
  );
};
const P = styled("p")`
  position: absolute;
  top: -19px;
  opacity: 0.5;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  height: 186px;
  width: 164px;
  border-radius: 8px 8px 0px 0px;
  padding-left: 95px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  transition: 0.3s;
  background: black;
`;
const DIV = styled("div")`
  position: relative;
  height: 331px;
  width: 258px;
  border-radius: 10px;
  border: 1px solid #38f2af;
  margin-top: 40px;

  & img {
    height: 186px;
    width: 258px;
    border-radius: 8px 8px 0px 0px;
  }
  & h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 2px;
    color: #38f2af;
    margin-left: 18px;
  }
  & h5 {
    margin-left: 18px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #828282;
  }
`;
const DIVFixed = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 30px;
  margin-top: 40px;
  border-top: 1px solid #343741;
  & div h4 {
    margin-top: 16px;
    margin-left: -13px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #38f2af;
  }
  & div button {
    margin-top: 5px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #38f2af;
    flex: none;
    order: 0;
    flex-grow: 0;
    background: none;
    border-radius: 20px;
    border: 1px solid #38f2af;
  }
`;
export default Cards;
