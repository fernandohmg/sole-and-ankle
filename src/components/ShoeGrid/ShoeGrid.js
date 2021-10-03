import React from "react";
import styled from "styled-components/macro";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <CardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const CardWrapper = styled.div`
  min-width: 275px;
  max-width: 450px;
  /* flex: 1 0 342px; */
  flex: 1;
`;

export default ShoeGrid;
