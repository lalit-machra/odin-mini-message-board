import { myPool } from "../db/pool.js";

async function addToDatabase({ author, added, message }) {
  try {
    console.log("Adding an entry: ");
    await myPool.query(`
      INSERT INTO messages (author, added, message)
      VALUES ($1, $2, $3);
    `, [author, added, message]);
  } catch(err) {
    console.log("Some error occured in adding the entry: ", err);
  } finally {
    console.log("Entry added");
  }
}

async function getAllData() {
  try {
    console.log("Fetching all data");
    let { rows } = await myPool.query(`
      SELECT * FROM messages;
    `);
    console.log(rows);
    return rows;
  } catch(err) {
    console.log("Some error occured in all fetching data: ", err);
    throw err;
  } finally {
    console.log("All data fetched");
  }
}

async function deleteFromDb(id) {
  try {
    await myPool.query(`
      DELETE FROM messages WHERE id = $1;
    `, [id]);
  } catch (err) {
    throw err;
  }
}

export { addToDatabase, getAllData, deleteFromDb }