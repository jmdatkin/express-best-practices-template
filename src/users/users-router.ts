import express from "express";
import { create, destroy, findAll, findOne, update } from "./users-service.js";

const usersRouter = express.Router();

usersRouter.get("/", (req, res, next) => {
  const id = req.query.id as string | undefined;
  if (id) return res.status(200).json(findOne(parseInt(id)));
  else return res.status(200).json(findAll());
});

usersRouter.post("/", (req, res, next) => {
  const data = req.body;
  return res.status(200).json(create(data));
});

usersRouter.patch("/", (req, res, next) => {
  const id = req.query.id as string | undefined;
  const data = req.body;

  if (!id) return next();

  return res.status(200).json(update(parseInt(id), data));
});

usersRouter.delete("/", (req, res, next) => {
  const id = req.query.id as string | undefined;

  if (!id) return next();

  return res.status(200).json(destroy(parseInt(id)));
});

export default usersRouter;
