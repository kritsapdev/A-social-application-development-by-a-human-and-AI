const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (we'll add the actual connection string later)
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes (we'll add these later)
app.get('/', (req, res) => {
  res.send('FatBook API is running');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));