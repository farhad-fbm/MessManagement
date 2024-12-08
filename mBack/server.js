// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const memberRoutes = require('./routes/memberRoutes');
const mealRoutes = require('./routes/mealRoutes');
// const bazarRoutes = require('./routes/bazarRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/dailymeals', mealRoutes);
// app.use('/api/dailybazars', bazarRoutes);


// console.log(memberRoutes); // Should output the router functions





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
