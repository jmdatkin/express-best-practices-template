import express from "express";
import { create, destroy, findAll, findOne, update } from "./users-service.js";

const usersRouter = express.Router();

usersRouter.get("/", async (req, res, next) => {
  const id = req.query.id as string | undefined;
  if (id) return res.status(200).json(await findOne(parseInt(id)));
  else return res.status(200).json(await findAll());
});

usersRouter.post("/", async (req, res, next) => {
  const data = req.body;
  return res.status(200).json(await create(data));
});

usersRouter.patch("/", async (req, res, next) => {
  const id = req.query.id as string | undefined;
  const data = req.body;

  if (!id) return next();

  return res.status(200).json(await update(parseInt(id), data));
});

usersRouter.delete("/", async (req, res, next) => {
  const id = req.query.id as string | undefined;

  if (!id) return next();

  return res.status(200).json(await destroy(parseInt(id)));
});

export default usersRouter;
