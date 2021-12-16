import { useRouter } from "next/router";
import styled from "styled-components";
import MainInformation from "./mainInformation";

const Coin = styled.div`
  border: 1px solid #bdbbbb;
  border-radius: 10px;
  margin: auto;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const AdditionalInfo = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: bold;
  display flex;
  justify-content: start;
`;

const InfoRow = styled.div`
  width: 50%;
`;

const coinWidget = ({
  name,
  symbol,
  currentPrice,
  high24h,
  low24h,
  imageLink,
  currency,
  id,
}) => {
  const router = useRouter();

  const openCoinPage = () => {
    router.push(`coin/?coin=${id}`);
  };

  return (
    <Coin
      onClick={() => {
        openCoinPage();
      }}
    >
      <MainInformation
        name={name}
        symbol={symbol}
        currentPrice={currentPrice}
        currency={currency}
        imageLink={imageLink}
        symbolSize="30px"
        nameSize="18px"
      />

      <AdditionalInfo>
        <InfoRow>24h high: {high24h}</InfoRow>
        <InfoRow>24h low: {low24h}</InfoRow>
      </AdditionalInfo>
    </Coin>
  );
};

export default coinWidget;
