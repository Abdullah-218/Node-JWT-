const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Needed for POST request body

app.get('/', (req, res) => {
  res.send({
    message: "A sample API"
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.json({ token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT} port`);
});