import db from "../database/db";

export interface Post {
  content: string;
}

export const findAll = () => {
  return db.prepare("SELECT * FROM posts").all();
};

export const findOne = (id: number) => {
  return db.prepare("SELECT * FROM posts WHERE id = ?").get(id);
};

export const create = (data: Post) => {
  return db
    .prepare("INSERT INTO posts VALUES (?, ?) RETURNING *")
    .get(null, data.content);
};

export const update = (id: number, data: Post) => {
  return db
    .prepare("UPDATE posts SET content = ? WHERE id = ? RETURNING *")
    .get(data.content, id);
};

export const destroy = (id: number) => {
  return db.prepare("DELETE FROM posts WHERE id = ? RETURNING *").get(id);
};
