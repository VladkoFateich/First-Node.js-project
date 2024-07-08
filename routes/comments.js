const express = require('express');
const {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentHandler,
  deleteSingleCommentHandler,
} = require('../controllers/comments');
const router = express.Router();

router.get('/', getCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.post('/', postCommentHandler);
router.delete('/:commentId', deleteSingleCommentHandler);

module.exports = router;
