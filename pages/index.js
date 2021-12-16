import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {

  const [coins, setCoins] = useState();

  useEffect(async ()=>{
    const coinsData = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency:"eur",
        per_page: 10
      }
    })

    setCoins(coinsData.data)
  }, [])

  return (
    <div >
    {coins && coins.map((coin)=>(
      <div>
        {coin.name}
      </div>
    ))}
    </div>
  )
}
