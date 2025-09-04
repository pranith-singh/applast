import express from "express";
import users from "./routes/users.js";
import tasks from "./routes/tasks.js";

const app = express();
app.use(express.json());

app.use("/api/users", users);
app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`✅ Backend running on ${port}`));