const express = require('express');
const app = express();
const PORT = 5050;

app.get('/', (req, res) => {
  res.json({
    message: "A sample API"
  })
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT} port`);
});