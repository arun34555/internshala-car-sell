const Car = require('../models/Car');

exports.createCar = async (req, res) => {
  const { name, manufacturingYear, price } = req.body;
  try {
    const newCar = new Car({ name, manufacturingYear, price });
    await newCar.save();
    res.status(201).send('Car created successfully');
  } catch (error) {
    res.status(400).send('Error creating car');
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(400).send('Error fetching cars');
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).send('Car not found');
    res.json(car);
  } catch (error) {
    res.status(400).send('Error fetching car');
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) return res.status(404).send('Car not found');
    res.send('Car updated successfully');
  } catch (error) {
    res.status(400).send('Error updating car');
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).send('Car not found');
    res.send('Car deleted successfully');
  } catch (error) {
    res.status(400).send('Error deleting car');
  }
};
