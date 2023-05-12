/**
* App entrypoint.
*/
'use strict';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authRoutes = require('./server/routes/authRoutes');
const productRoutes = require('./server/routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Lost and Found API');
});

