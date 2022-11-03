import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cards from "../../components/UI/Cards";
import { acceptInnerPage } from "../../redux/store/cardSlice";

const SectionCard = () => {
  const [value, setValue] = React.useState("");
  console.log(value);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card.items);
  React.useEffect(() => {
    dispatch(acceptInnerPage());
  }, [dispatch]);
  const filterCard = state?.assets?.filter((i) => {
    return i.asset_contract.name.toLowerCase().includes(value.toLowerCase());
  });
  console.log(filterCard);
  return (
    <DIV>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search artwork"
      />
      <DIVCARD>
        {state &&
          filterCard?.slice(0, 4)?.map((i) => (
            <div>
              <Cards
                id={i.id}
                images={i?.asset_contract?.image_url}
                description={i?.asset_contract?.name}
                text={i?.asset_contract?.symbol}
                fixedPrice={i?.asset_contract?.asset_contract_type}
                price={i?.asset_contract?.schema_name}
              />
            </div>
          ))}
      </DIVCARD>
    </DIV>
  );
};
const DIV = styled("div")`
position: relative;
  width: 1190px;
  height: 1080px;
  background-color: #2b2c33;
  & input {
    position: absolute;
    left: 360px;
    top: -73px;
    width: 322px;
    height: 25px;
    border-radius: 10px;
    outline: none;
    padding: 10px;
    background: #373943;
  }
  & input::placeholder {
    width: 78px;
    height: 21px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #828282;
  }
`;
const DIVCARD = styled("div")`
  display: flex;
  justify-content: space-around;
`;

export default SectionCard;
