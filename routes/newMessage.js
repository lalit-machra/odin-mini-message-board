import { Router } from "express";
import { addToDatabase } from "../db/queries.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", async (req, res) => {
  const author = req.body.author;
  const added = new Date();
  const message = req.body.message;
  await addToDatabase({ author, added, message });
  res.redirect("/");
});

export { newRouter };