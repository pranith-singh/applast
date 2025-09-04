import { Router } from "express";
import { getPool } from "../db.js";
import sql from "mssql";

const router = Router();

router.get("/", async (req, res) => {
  const pool = await getPool();
  const result = await pool.request().query("SELECT id, title, completed FROM tasks");
  res.json(result.recordset);
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const pool = await getPool();
  await pool.request()
    .input("title", sql.NVarChar(255), title)
    .query("INSERT INTO tasks (title) VALUES (@title)");
  res.sendStatus(201);
});

router.post("/:id/toggle", async (req, res) => {
  const { id } = req.params;
  const pool = await getPool();
  await pool.request()
    .input("id", sql.Int, id)
    .query("UPDATE tasks SET completed = ~completed & 1 WHERE id=@id");
  res.sendStatus(200);
});

export default router;