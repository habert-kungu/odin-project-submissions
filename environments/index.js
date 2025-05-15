import express from "express";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// iset
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
