

import { Router } from "express";

const bookRouter = Router()
bookRouter.get("/", (req, res) => res.send("All authors"));
bookRouter.get("/:authorId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Author ID: ${bookId}`);
});

export default bookRouter;
