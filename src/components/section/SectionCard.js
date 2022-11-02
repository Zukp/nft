import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cards from "../../components/UI/Cards";
import { acceptInnerPage } from "../../redux/store/cardSlice";

const SectionCard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card.items);
  React.useEffect(() => {
    dispatch(acceptInnerPage());
  }, [dispatch]);

  return (
    <DIV>
      <DIVCARD>
        {state &&
          state?.assets?.slice(0, 4)?.map((i) => (
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
  width: 1190px;
  height: 1080px;
  background-color: #2b2c33;
`;
const DIVCARD = styled("div")`
  display: flex;
  justify-content: space-around;
`;

export default SectionCard;
