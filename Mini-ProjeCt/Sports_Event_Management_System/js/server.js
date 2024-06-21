const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Use environment port or default to 3000

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoUri = 'mongodb://localhost:27017/sports'; // Local MongoDB URI

mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schemas and Models
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, username } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new User({ email, username });
    await newUser.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, username } = req.body;

  try {
    const user = await User.findOne({ email, username });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or username" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ error: "Server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
