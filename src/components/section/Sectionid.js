import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InnerPage } from "../../redux/store/cardSlice";

const Sectionid = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(InnerPage(id));
  }, [id]);
  
  return (
    <DIV>
      {id} <p>success</p>
    </DIV>
  );
};
const DIV = styled("div")`
  margin: 200px auto;
  border: 1px solid black;
  background: #2b2c33;
  border-radius: 10px;
  color: #38f2af;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 190px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  & p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: white;
    margin-left: 10px;
  }
`;

export default Sectionid;
