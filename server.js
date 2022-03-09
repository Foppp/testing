const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  res.send({ message: 'Hello from server' })
});
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
