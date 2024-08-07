const Car = require('../models/Car');

exports.dashboard = async (req, res) => {
  try {
    const carCount = await Car.countDocuments();
    const cars = await Car.find();
    res.render('dashboard', { carCount, cars });
  } catch (error) {
    res.status(400).send('Error loading dashboard');
  }
};
