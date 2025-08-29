import express from "express";
import { indexRouter } from "./routes/index.js";
import { newRouter as newMessageRouter } from "./routes/newMessage.js";
import { openMessageRouter } from "./routes/openMessage.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/open", openMessageRouter);

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }
  console.log("server is running on http://localhost:8080");
});