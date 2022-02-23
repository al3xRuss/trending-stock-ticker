import React, { useRef, useState } from 'react'
import axios from 'axios';
import { ICompanyProfile } from '../interfaces';
import styles from './StockListing.module.scss';

interface StockListingProps {
  companyProfile?: ICompanyProfile
  // companyNews: any
}

export const StockListing: React.FC<StockListingProps> = ({ companyProfile }) => {
  const [active, setActive] = useState(false);

  const contentSpace = useRef(null)

  const bullish = companyProfile?.quote?.d && companyProfile.quote.d > 0

  function getDecemil(num: number) {
    return Math.abs(Math.round((num + Number.EPSILON) * 100) / 100)
  }

  function toggleStockListing() {
    setActive( !active )
  }
  
  if (!companyProfile) return <div>Attempting to retrieve data...</div>;

  return (
    <div data-testid="listing-container" className={styles.listingContainer}>
      <div data-testid="listing" className={styles.listing} onClick={toggleStockListing}>
        <div className={`${styles.symbolCol} ${styles.listingCol}`}>
          <div className={styles.symbolPill}>
            <span>
              {companyProfile?.ticker}
            </span>
          </div> 
        </div>
        <div className={`${styles.nameCol} ${styles.listingCol}`}>
          <span className={styles.nameText}>
            {companyProfile?.name}
          </span> 
        </div>
        <div className={`${styles.currentPriceCol} ${styles.listingCol}`}>
          <span className={styles.currentPriceText}>
            ${companyProfile?.quote?.c}
          </span>
        </div>
        <div className={styles.priceChangeCol}>
          <span className={`${styles.priceChangeText} ${bullish ? 'text-lime-700' : 'text-red-800'}`}>
            {bullish ? '+' : '-'}${getDecemil(companyProfile?.quote?.d ? companyProfile.quote.d : 0)}
          </span>
        </div>
        <div className={styles.percentCol}>
          <div
            className={`${styles.percentPill} ${bullish ? 'bg-lime-200 text-lime-700' : 'bg-red-200 text-red-800'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" 
              d={
                bullish 
                ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                : "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              }
              clipRule="evenodd" />
            </svg>
            <span>{getDecemil(companyProfile?.quote?.dp ? companyProfile.quote.dp : 0)}% </span>
          </div>
        </div>
        <div className={styles.toggleCol}>
          <div
              className={`${styles.toggle} ${active ? 'bg-gray-200' : 'bg-white'}`}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" 
              d={
                active
                ? "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                : "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              }
              clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>
      <div
        data-testid="news-container"
        ref={contentSpace}
        className={`${styles.newsContainer} ${active? "max-h-max" : "max-h-0"}`}
      >
        <div className={styles.newsBlock}>
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">{companyProfile?.name} News</h5>
          </a>
          <p className={styles.newsText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo vel fugit consequatur consequuntur qui corrupti doloremque ex, cupiditate alias vero officia nesciunt dolore pariatur eum illum eveniet temporibus voluptatibus!</p>
          <p className={styles.newsText}>Placeat cumque reprehenderit ea pariatur, veniam deleniti aperiam officia, nesciunt iure illum quam, maxime numquam expedita fugiat rerum odit a quibusdam. Perferendis tempora dolorem id eaque placeat ut quo quos.</p>
          <p className={styles.newsText}>Eum rerum dicta voluptas sunt ad maiores officia magni corrupti expedita animi consequatur vel quibusdam, totam, tenetur tempora quas veritatis consectetur adipisci praesentium, velit optio? Doloremque vitae repellendus fugit eum.</p>
          <p className={styles.newsText}>Deserunt neque, voluptatum sit exercitationem repellat adipisci fuga placeat et assumenda obcaecati quasi porro corporis blanditiis quod, nobis praesentium dolorem eos nisi optio? Alias porro harum optio laboriosam corrupti dolor?</p>
          <p className={styles.newsText}>Sint porro aperiam sequi quibusdam repudiandae amet assumenda iusto recusandae deleniti id ipsum esse est maxime expedita molestias aspernatur beatae unde, sunt incidunt quam inventore, qui quod? Aperiam, aliquam esse.</p>
          <a href="#" className={styles.button}>
              Read more
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
      
    </div>
  )
}