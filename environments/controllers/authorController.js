import db from "../db.js";
import asyncHandler from "express-async-handler";

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Names(authorId));
  if (!author) {
    res.status(404).send("Author not found ");
    return;
  }
  res.send(`Author name : ${author.name}`);
});

export default getAuthorById;
