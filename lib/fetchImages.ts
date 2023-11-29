/**
 * Fetch images json from the Pexels API and parse with Zod
 * 
 * Based on tutorial found here:
 * 
 * https://www.youtube.com/watch?v=1bVzEHDOtXs
 */

import type { ImagesResults } from "@/models/images";
import { ImagesSchemaWithPhotos } from "@/models/images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_KEY,
      },
    });
    if (!res.ok) throw new Error("Fetch Images error!\n");
    const imagesResults: ImagesResults = await res.json();
    // Parse data with Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (e) {
    // Will show in terminal console
    if (e instanceof Error) console.log(e.stack);
  }
}
