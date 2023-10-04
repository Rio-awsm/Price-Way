"use server";

import axios from "axios";
import * as cheerio from 'cheerio';
import { log } from "util";

export async function scrapedAmazonProduct(url: string) {
  if (!url) return;

  //brightdata proxy config
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);

  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    //fetch product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data)

    //extract title
    const title = $('#productTitle').text().trim();
    console.log({title});
    
  } catch (error: any) {
    console.log(error);
  }

}
