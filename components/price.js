import styled from "styled-components";

const PriceWrapper = styled.div`
  margin-left: auto;
  font-size: ${(props) => props.priceSize};
  font-weight: bold;
`;
const Currency = styled.div`
  font-size: 18px;
  display: inline;
`;

const price = ({ currentPrice, currency, priceSize }) => (
  <PriceWrapper priceSize={priceSize} data-testid="price">
    {currentPrice}
    <Currency>{currency}</Currency>
  </PriceWrapper>
);

export default price;
