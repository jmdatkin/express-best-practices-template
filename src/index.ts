import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import postsRouter from "./posts/posts-router.js";
import usersRouter from "./users/users-router.js";

const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
