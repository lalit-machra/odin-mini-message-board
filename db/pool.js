import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const myPool = new Pool({
  connectionString: process.env.neonConnectionString
});

export { myPool };