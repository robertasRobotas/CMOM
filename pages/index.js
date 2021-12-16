import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CoinWidget from "../components/coinWidget";

const CoinsWrapper = styled.div`
  backkground-color: blue;
  width: 500px;
  border: 1px solid #bdbbbb;
  border-radius: 10px;
  margin: auto;
  padding: 1rem;
`;

export default function Home() {
  const [coins, setCoins] = useState();

  const fetchCoinsMarket = async () => {
    const coinsData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "eur",
          per_page: 10,
        },
      }
    );

    console.log("coinsData", coinsData);

    setCoins(coinsData.data);
  };

  useEffect(() => {
    fetchCoinsMarket();
  }, []);

  return (
    <CoinsWrapper>
      {coins &&
        coins.map((coin) => (
          <CoinWidget
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
            high24h={coin.high_24h}
            low24h={coin.low_24h}
            imageLink={coin.image}
          />
        ))}
    </CoinsWrapper>
  );
}
