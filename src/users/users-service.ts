/**
 * UsersService
 *
 * These functions should access your DB and retrieve/update data.
 */

import db from "../database/db";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const findAll = () => {
  return db.prepare("SELECT * FROM users").all();
};

export const findOne = (id: number) => {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
};

export const create = (data: User) => {
  return db
    .prepare("INSERT INTO users VALUES (?, ?, ?) RETURNING *")
    .get(null, data.name, data.email);
};

export const update = (id: number, data: User) => {
  return db
    .prepare("UPDATE users SET name = ?, email = ? WHERE id = ? RETURNING *")
    .get(data.name, data.email, id);
};

export const destroy = (id: number) => {
  return db.prepare("DELETE FROM users WHERE id = ? RETURNING *").get(id);
};
