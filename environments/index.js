import express from "express";

const app = express();
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js"


app.use("/authors", authorRouter);
app.use("/books", bookRouter)



const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
