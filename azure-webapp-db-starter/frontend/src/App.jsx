import React, { useEffect, useState } from "react";
import { getUsers, getTasks } from "./api";

export default function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
    getTasks().then(setTasks);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Azure WebApp + SQL Demo</h1>
      <h2>Users</h2>
      <ul>{users.map(u => <li key={u.id}>{u.name} ({u.email})</li>)}</ul>
      <h2>Tasks</h2>
      <ul>{tasks.map(t => <li key={t.id}>{t.title} {t.completed ? "✅" : "⬜️"}</li>)}</ul>
    </div>
  );
}