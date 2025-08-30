import { Router } from "express";
import { messages } from "../routes/index.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  const added = new Date();
  const id = messages.length + 1;
  messages.push({ user, text, added, id });
  res.redirect("/");
});

export { newRouter };