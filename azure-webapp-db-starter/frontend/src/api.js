export async function getUsers() {
  const res = await fetch("/api/users");
  return res.json();
}

export async function getTasks() {
  const res = await fetch("/api/tasks");
  return res.json();
}