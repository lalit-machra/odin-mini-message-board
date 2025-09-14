import { Router } from "express";
import { deleteFromDb } from "../db/queries.js";

const deleteRouter = Router();

deleteRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  await deleteFromDb(id);
  res.redirect("/");
});

export { deleteRouter };