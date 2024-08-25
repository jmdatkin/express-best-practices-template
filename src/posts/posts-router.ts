import express from "express";
import { create, destroy, findAll, findOne, update } from "./posts-service.js";

const postsRouter = express.Router();

postsRouter.get("/", (req, res, next) => {
  const id = req.query.id as string | undefined;
  if (id) return res.status(200).json(findOne(parseInt(id)));
  else return res.status(200).json(findAll());
});

postsRouter.post("/", (req, res, next) => {
  const data = req.body;
  return res.status(201).json(create(data));
});

postsRouter.patch("/", (req, res, next) => {
  const id = req.query.id as string | undefined;
  const data = req.body;

  if (!id) return next();

  return res.status(200).json(update(parseInt(id), data));
});

postsRouter.delete("/", (req, res, next) => {
  const id = req.query.id as string | undefined;

  if (!id) return next();

  return res.status(200).json(destroy(parseInt(id)));
});

export default postsRouter;
