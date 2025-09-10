import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const populate = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    added TIMESTAMP,
    message TEXT
  );
`;

async function main() {
  console.log("seeding started.....");
  const client = new Client({
    connectionString: process.env.neonConnectionString
  });
  await client.connect();
  try {
    // await client.query(populate);
    await client.query(populate);
    console.log("done");
  } catch(err) {
    console.log("some error occured: ", err);
  } finally {
    client.end();
    console.log("completed.....");
  }
}

main();