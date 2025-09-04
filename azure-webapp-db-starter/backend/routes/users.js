import { Router } from "express";
import { getPool } from "../db.js";
import sql from "mssql";

const router = Router();

router.get("/", async (req, res) => {
  const pool = await getPool();
  const result = await pool.request().query("SELECT id, name, email FROM users");
  res.json(result.recordset);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const pool = await getPool();
  await pool.request()
    .input("name", sql.NVarChar(255), name)
    .input("email", sql.NVarChar(255), email)
    .query("INSERT INTO users (name, email) VALUES (@name, @email)");
  res.sendStatus(201);
});

export default router;