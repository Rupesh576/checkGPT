const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// POST: Add a user
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
});

// GET: List all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
