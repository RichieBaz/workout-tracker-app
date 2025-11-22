require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
connectDB(); // connect to MongoDB

// Setup EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public folder for CSS
app.use(express.static(path.join(__dirname, 'public')));

// Body parser for forms
app.use(express.urlencoded({ extended: true }));

// Method override for PUT & DELETE form requests
app.use(methodOverride('_method'));

const workoutRoutes = require('./routes/workoutRoutes');
app.use('/workouts', workoutRoutes);


// Routes
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
