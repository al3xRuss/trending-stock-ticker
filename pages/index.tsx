import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTrending } from '../pages/api/http-common';
import { StockListing } from '../components/StockListing';
import { StockTicker } from '../components/StockTicker';
import { mockedCompanyProfile } from '../__mocks__/mocks';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>StockTicker</title>
        <meta name="description" content="A Sample StockTicker By Alex Russ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stock<a href="#">Ticker!</a>
        </h1>

        <p className={styles.description}>
          This is generated from Yahoo Finance API&apos;s Trending securities, alongside Finnhub
        </p>
        <StockTicker />
        <StockListing companyProfile={mockedCompanyProfile} />
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by some guy
        </a>
      </footer>
    </div>
  )
}

export default Home
