const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', verifyToken, verifyAdmin, adminController.dashboard);

module.exports = router;
