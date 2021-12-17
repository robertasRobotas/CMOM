import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CoinWidget from "../components/coinWidget";
import PageLabel from "../components/pageLabel";
import Spinner from "../components/spinner";

const CoinsWrapper = styled.div`
  backkground-color: blue;
  width: 420px;
  border: 1px solid #bdbbbb;
  border-radius: 10px;
  margin: auto;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

const currency = "eur";
const perPageCoins = 10;

export default function Home({ coinsList }) {
  const [coins, setCoins] = useState(coinsList);

  const fetchCoinsMarket = async () => {
    console.info("Refreshed");
    const coinsData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: currency,
          per_page: perPageCoins,
        },
      }
    );

    setCoins(coinsData.data);
  };

  return (
    <CoinsWrapper>
      <PageLabel
        text="Coins ordered by market cap:"
        onRefresh={fetchCoinsMarket}
      />
      {coins.map((coin) => (
        <CoinWidget
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          currentPrice={coin.current_price}
          high24h={coin.high_24h}
          low24h={coin.low_24h}
          imageLink={coin.image}
          currency={currency}
        />
      ))}
      <Spinner loading={!coins} />
    </CoinsWrapper>
  );
}

export async function getServerSideProps() {
  const coinsData = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: currency,
        per_page: perPageCoins,
      },
    }
  );

  return {
    props: {
      coinsList: coinsData.data,
    },
  };
}
