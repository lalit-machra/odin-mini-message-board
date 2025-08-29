import express from "express";
import { indexRouter } from "./routes/index.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }
  console.log("server is running on http://localhost:8080");
});