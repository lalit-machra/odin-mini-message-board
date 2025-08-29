import { Router } from "express";
import { messages } from "../routes/index.js";

const openMessage = Router();

openMessage.get("/:id", (req, res) => {
  res.render("message", { id: req.params.id, messages: messages });
});

export { openMessage as openMessageRouter };