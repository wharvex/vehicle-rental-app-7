/**
 * Tell TypeScript about our environment variables.
 * 
 * Based on tutorial found here:
 * 
 * https://youtu.be/1bVzEHDOtXs?si=rrkgkSWCFZf4Rbfn&t=403
 */

import { cleanEnv, str } from "envalid";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });
const env = cleanEnv(process.env, {
  PEXELS_KEY: str(),
});

export default env;
