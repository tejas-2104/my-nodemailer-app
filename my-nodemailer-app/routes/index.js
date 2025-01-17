const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/send-email', emailController.sendEmail);

module.exports = router;
