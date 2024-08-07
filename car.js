const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

router.post('/', verifyToken, verifyAdmin, carController.createCar);
router.get('/', verifyToken, carController.getCars);
router.get('/:id', verifyToken, carController.getCarById);
router.put('/:id', verifyToken, verifyAdmin, carController.updateCar);
router.delete('/:id', verifyToken, verifyAdmin, carController.deleteCar);

module.exports = router;
