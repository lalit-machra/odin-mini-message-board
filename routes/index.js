import { Router } from "express";
import * as db from "../db/queries.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  let allData = await db.getAllData();
  res.render("index", { messages: allData });
});

export { indexRouter };