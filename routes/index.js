import { Router } from "express";

const indexRouter = Router();

let messages = [
  {
    text: "hello",
    user: "amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "good morning",
    user: "charles",
    added: new Date(),
    id: 2,
  }
]

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

export { indexRouter, messages };