CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(255) NOT NULL,
  email NVARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id INT IDENTITY(1,1) PRIMARY KEY,
  title NVARCHAR(255) NOT NULL,
  completed BIT NOT NULL DEFAULT 0,
  user_id INT NULL FOREIGN KEY REFERENCES users(id)
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');
INSERT INTO tasks (title, completed) VALUES ('First Task', 0), ('Second Task', 1);