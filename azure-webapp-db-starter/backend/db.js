import sql from "mssql";

const conn = process.env.SQLAZURECONNSTR_DefaultConnection;

let poolPromise;
export async function getPool() {
  if (!poolPromise) {
    poolPromise = sql.connect(conn);
  }
  return poolPromise;
}