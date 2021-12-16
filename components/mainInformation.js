import Image from "next/image";
import Label from "./label";
import Price from "./price";
import styled from "styled-components";

const MainInformationWrapper = styled.div`
  display: flex;
`;

const Symbol = styled.span``;
const Name = styled.span``;

const mainInformation = ({
  name,
  symbol,
  nameSize,
  symbolSize,
  imageLink,
  currentPrice,
  currency,
}) => {
  return (
    <MainInformationWrapper>
      <Image src={imageLink} width={60} height={60} />
      <Label
        name={name}
        symbol={symbol}
        nameSize={nameSize}
        symbolSize={symbolSize}
      />
      {currentPrice && (
        <Price
          currentPrice={currentPrice}
          currency={currency}
          priceSize={symbolSize}
        />
      )}
    </MainInformationWrapper>
  );
};

export default mainInformation;
