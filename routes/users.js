const express = require('express');
const {
  getUsersHandler,
  getSingleUserHandler,
  postUserHandler,
} = require('../controllers/users');
const router = express.Router();

router.get('/', getUsersHandler);
router.get('/:userId', getSingleUserHandler);
router.post('/', postUserHandler);

module.exports = router;
