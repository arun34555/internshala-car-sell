const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');
const adminRoutes = require('./routes/admin');

const app = express();

mongoose.connect('mongodb://localhost:27017/quadiro', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
