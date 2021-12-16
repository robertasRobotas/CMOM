import styled from "styled-components";

const PriceWrapper = styled.div`
  margin-left: auto;
  font-size: 30px;
`;
const Currency = styled.div`
  font-size: 18px;
  display: inline;
`;

const price = ({ currentPrice, currency }) => (
  <PriceWrapper>
    {currentPrice}
    <Currency>{currency}</Currency>
  </PriceWrapper>
);

export default price;
