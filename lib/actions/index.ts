"use server"

import { scrapedAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string){
   if(!productUrl) return;

   try {
    const scrapedProduct = await scrapedAmazonProduct(productUrl);
   } catch (error: any) {
    throw new Error(`Falied to create/updater Product: ${error.message}`)
   }
}