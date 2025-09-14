import { Router } from "express";
import { getAllData } from "../db/queries.js";

const openMessage = Router();

openMessage.get("/:id", async (req, res) => {
  const messages = await getAllData();
  res.render("message", { id: req.params.id, messages: messages });
});

export { openMessage as openMessageRouter };