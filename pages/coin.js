import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import MainInformation from "../components/mainInformation";

const CoinWrapper = styled.div`
  width: 420px;
  margin: auto;
`;

const CoinInfo = styled.div`
  backkground-color: blue;
  width: 500px;
  border: 1px solid #bdbbbb;
  border-radius: 10px;
  margin: auto;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

const BackButton = styled.div`
  cursor: pointer;
  margin-left: 4px;
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div``;

const Description = styled.p`
  margin-top: 30px;
`;

const currency = "eur";
const language = "en";

const coinPage = () => {
  const router = useRouter();
  const [coin, setCoin] = useState();

  const getUrlParam = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);
    const coin = urlParams.get("coin");
    return coin;
  };

  const goBack = () => {
    router.push("/");
  };

  useEffect(async () => {
    const coinId = getUrlParam({ searchParams: window.location.search });

    const coinData = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );

    console.log("coinData", coinData.data);

    setCoin(coinData.data);
  }, []);

  return (
    <CoinWrapper>
      <BackButton onClick={() => goBack()}>{"<-- Back"}</BackButton>
      <CoinInfo>
        {coin && (
          <>
            <MainInformation
              name={coin.name}
              symbol={coin.symbol}
              imageLink={coin.image.large}
              symbolSize="40px"
              currency={currency}
              currentPrice={coin.market_data.current_price[currency]}
              nameSize="22px"
            />
            <AdditionalInfo>
              <Description
                dangerouslySetInnerHTML={{
                  __html: coin.description[language],
                }}
              />
            </AdditionalInfo>
          </>
        )}
      </CoinInfo>
    </CoinWrapper>
  );
};
export default coinPage;
