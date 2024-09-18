// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getHomePage);
router.post('/add-user', userController.addUser);

module.exports = router;

