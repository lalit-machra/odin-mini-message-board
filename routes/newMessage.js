import { Router } from "express";
import { addToDatabase } from "../db/queries.js";
import { body, validationResult } from "express-validator";

const newRouter = Router();

const validateMessage = [
  body("author").replace(' ', '')
    .isLength({ min: 2, max: 15 }).withMessage("Author name should be 2 to 15 letters long")
    .isAlphanumeric().withMessage("Author name should contain only letters & no whitespaces"),
  body("message").trim()
    .optional({ values: "falsy" })
    .isLength({ max: 50 }).withMessage("Message should not be more than 50 letters long")
]

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", validateMessage, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", { errors: errors.array() });
  }
  const author = req.body.author;
  const added = new Date();
  const message = req.body.message;
  await addToDatabase({ author, added, message });
  res.redirect("/");
});

export { newRouter };