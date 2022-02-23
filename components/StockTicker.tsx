import React from "react";
import axios from "axios";
import { useState } from "react";

import { StockListing } from "./StockListing";
import { getTrending } from "../pages/api/http-common";

export const StockTicker: React.FC = () => {
  const [post, setPost] = useState<any>(null)

  React.useEffect(() => {
    async function fetchTrending() {
        let response = await getTrending('US');
        response = await response;
        const r = response;
        setPost(r);
    }
    fetchTrending();
  }, []);

  if (!post) return <div>No Results.</div>;
  return (
    <div className=" w-full ">

        {
          post.map((i: any) => ( 
            <StockListing key={i.ticker == i.symbol ? i.ticker : `${i.ticker}-${i.symbol}`} companyProfile={i}/>
          ))
        }
    </div>
  );
};
